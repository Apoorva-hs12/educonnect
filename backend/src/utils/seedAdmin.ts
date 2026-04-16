import bcrypt from 'bcryptjs';
import { User } from '../models/User';

export const seedAdmin = async () => {
  try {
    const adminEmail = 'admin@educonnect.com';
    const adminPassword = 'AdminPassword123!';
    
    const existingAdmin = await User.findOne({ email: adminEmail });
    
    if (existingAdmin) {
      console.log('Admin user already exists.');
      return;
    }

    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(adminPassword, salt);

    const admin = new User({
      fullName: 'System Administrator',
      email: adminEmail,
      passwordHash,
      role: 'admin',
      skills: ['Management', 'System Analytics'],
      enrolledCourses: [],
      location: 'Global Headquarters',
      phone: '+1 (555) 000-0000',
    });

    await admin.save();
    console.log('--- ADMIN SEEDED SUCCESSFULLY ---');
    console.log(`Email: ${adminEmail}`);
    console.log(`Password: ${adminPassword}`);
    console.log('---------------------------------');
  } catch (error) {
    console.error('Error seeding admin user:', error);
  }
};
