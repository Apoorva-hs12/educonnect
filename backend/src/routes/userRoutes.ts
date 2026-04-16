import { Router } from 'express';
import { updateProfile } from '../controllers/userController';
import { protect } from '../middleware/auth';

const router = Router();

// @route   PUT /api/users/profile
// @desc    Update user profile
// @access  Private
router.put('/profile', protect, updateProfile);

export default router;
