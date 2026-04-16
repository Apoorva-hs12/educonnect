import { Request, Response } from 'express';
import { User } from '../models/User';
import { z } from 'zod';

const updateProfileSchema = z.object({
  fullName: z.string().min(2).optional(),
  email: z.string().email().optional(),
  bio: z.string().optional(),
  location: z.string().optional(),
  phone: z.string().optional(),
  skills: z.array(z.string()).optional(),
});

export const updateProfile = async (req: Request, res: Response) => {
  try {
    const userId = (req as any).user?.userId;
    if (!userId) {
      return res.status(401).json({ message: 'Not authenticated' });
    }

    const validatedData = updateProfileSchema.parse(req.body);

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Update fields if provided
    if (validatedData.fullName) user.fullName = validatedData.fullName;
    if (validatedData.email) {
      // Check if email is already taken by another user
      const existingUser = await User.findOne({ email: validatedData.email });
      if (existingUser && existingUser._id.toString() !== userId) {
        return res.status(400).json({ message: 'Email already in use' });
      }
      user.email = validatedData.email;
    }
    if (validatedData.bio !== undefined) user.bio = validatedData.bio;
    if (validatedData.location !== undefined) user.location = validatedData.location;
    if (validatedData.phone !== undefined) user.phone = validatedData.phone;
    if (validatedData.skills !== undefined) user.skills = validatedData.skills;

    await user.save();

    const updatedUser = await User.findById(userId).select('-passwordHash');

    res.json({
      message: 'Profile updated successfully',
      user: updatedUser,
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ errors: error.issues });
    }
    console.error('Update Profile Error:', error);
    res.status(500).json({ message: 'Server error during profile update' });
  }
};
