import mongoose, { Document, Schema } from 'mongoose';

export interface ICourse extends Document {
  title: string;
  description: string;
  instructor: mongoose.Types.ObjectId;
  price: number;
  duration: string;
  tags: string[];
  thumbnail?: string;
  studentsCount: number;
  rating: number;
  modules: {
    title: string;
    lessons: {
      name: string;
      duration: string;
      videoUrl?: string;
      isFree: boolean;
    }[];
  }[];
  createdAt: Date;
  updatedAt: Date;
}

const CourseSchema: Schema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
    },
    instructor: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    price: {
      type: Number,
      required: true,
      default: 0,
    },
    duration: {
      type: String,
      required: true,
    },
    tags: [
      {
        type: String,
      },
    ],
    thumbnail: {
      type: String,
    },
    studentsCount: {
      type: Number,
      default: 0,
    },
    rating: {
      type: Number,
      default: 0,
    },
    modules: [
      {
        title: {
          type: String,
          required: true,
        },
        lessons: [
          {
            name: {
              type: String,
              required: true,
            },
            duration: {
              type: String,
              required: true,
            },
            videoUrl: {
              type: String,
            },
            isFree: {
              type: Boolean,
              default: false,
            },
          },
        ],
      },
    ],
  },
  {
    timestamps: true,
  }
);

export const Course = mongoose.model<ICourse>('Course', CourseSchema);
