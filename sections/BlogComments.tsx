'use client';

import { useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ThumbsUp, ThumbsDown } from 'lucide-react';

interface userProps {
  name: string;
  image: string;
}

interface Comment {
  id: string;
  user: userProps;
  date: string;
  text: string;
  likes: number;
  dislikes: number;
  replies?: Comment[];
}

interface CommentProps {
  comment: Comment;
  onReply: (parentId: string, replyText: string) => void;
  onLike: (commentId: string) => void;
  onDislike: (commentId: string) => void;
  depth?: number;
  isLastReply?: boolean;
}

function CommentComponent({
  comment,
  onReply,
  onLike,
  onDislike,
  depth = 0,
  isLastReply = true,
}: CommentProps) {
  const [isReplying, setIsReplying] = useState(false);
  const [replyText, setReplyText] = useState('');

  const handleReply = () => {
    if (replyText.trim()) {
      onReply(comment.id, replyText);
      setReplyText('');
      setIsReplying(false);
    }
  };

  return (
    <div className={`relative ${depth > 0 ? 'ml-12 mt-2' : 'mt-4'}`}>
      {depth > 0 && (
        <div
          className='absolute w-[2px] bg-gray-300'
          style={{
            left: '-26px',
            top: '-16px',
            height: isLastReply ? '32px' : '100%',
          }}
        />
      )}
      <div className='flex items-start space-x-4'>
        <Avatar className='w-8 h-8 z-10 relative'>
          <AvatarImage src={comment.user.image} alt={comment.user.name} />
          <AvatarFallback>{comment.user.name[0]}</AvatarFallback>
        </Avatar>
        <div className='flex-1'>
          <div className='bg-gray-100 rounded-2xl px-4 py-2'>
            <div className='font-semibold'>{comment.user.name}</div>
            <p className='mt-1'>{comment.text}</p>
          </div>
          <div className='flex items-center mt-1 space-x-4'>
            <Button
              variant='ghost'
              size='sm'
              className='text-xs text-gray-500 hover:text-gray-700'
              onClick={() => setIsReplying(!isReplying)}
            >
              Reply
            </Button>
            <Button
              variant='ghost'
              size='sm'
              className='text-xs text-gray-500 hover:text-gray-700'
              onClick={() => onLike(comment.id)}
            >
              <ThumbsUp className='w-4 h-4 mr-1' />
              {comment.likes}
            </Button>
            <Button
              variant='ghost'
              size='sm'
              className='text-xs text-gray-500 hover:text-gray-700'
              onClick={() => onDislike(comment.id)}
            >
              <ThumbsDown className='w-4 h-4 mr-1' />
              {comment.dislikes}
            </Button>
            <span className='text-xs text-gray-500'>{comment.date}</span>
          </div>
          {isReplying && (
            <div className='mt-2 flex items-center space-x-2'>
              <Input
                value={replyText}
                onChange={(e) => setReplyText(e.target.value)}
                placeholder='Write a reply...'
                className='flex-1'
              />
              <Button onClick={handleReply}>Send</Button>
            </div>
          )}
        </div>
      </div>
      {comment.replies && (
        <div className='mt-2'>
          {comment.replies.map((reply, index) => (
            <CommentComponent
              key={reply.id}
              comment={reply}
              onReply={onReply}
              onLike={onLike}
              onDislike={onDislike}
              depth={depth + 1}
              isLastReply={index === comment.replies!.length - 1}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default function CommentSection() {
  const [comments, setComments] = useState<Comment[]>([
    {
      id: '1',
      user: {
        name: 'Alice Johnson',
        image: '/placeholder.svg?height=32&width=32',
      },
      date: '2023-05-15',
      text: 'Great post! I learned a lot from this.',
      likes: 5,
      dislikes: 1,
      replies: [
        {
          id: '1-1',
          user: {
            name: 'Bob Smith',
            image: '/placeholder.svg?height=32&width=32',
          },
          date: '2023-05-15',
          text: 'I agree! The author did a great job explaining the concepts.',
          likes: 2,
          dislikes: 0,
        },
        {
          id: '1-2',
          user: {
            name: 'Charlie Brown',
            image: '/placeholder.svg?height=32&width=32',
          },
          date: '2023-05-16',
          text: 'I have a question about the third point. Can you elaborate?',
          likes: 1,
          dislikes: 0,
        },
      ],
    },
    {
      id: '2',
      user: {
        name: 'David Lee',
        image: '/placeholder.svg?height=32&width=32',
      },
      date: '2023-05-17',
      text: 'This is exactly what I was looking for. Thanks for sharing!',
      likes: 3,
      dislikes: 7,
    },
  ]);

  const handleReply = (parentId: string, replyText: string) => {
    const newReply: Comment = {
      id: Date.now().toString(),
      user: {
        name: 'Current User',
        image: '/placeholder.svg?height=32&width=32',
      },
      date: new Date().toISOString().split('T')[0],
      text: replyText,
      likes: 0,
      dislikes: 0,
    };

    setComments((prevComments) => {
      const addReply = (comments: Comment[]): Comment[] => {
        return comments.map((comment) => {
          if (comment.id === parentId) {
            return {
              ...comment,
              replies: [...(comment.replies || []), newReply],
            };
          } else if (comment.replies) {
            return {
              ...comment,
              replies: addReply(comment.replies),
            };
          }
          return comment;
        });
      };

      return addReply(prevComments);
    });
  };

  const handleLike = (commentId: string) => {
    setComments((prevComments) => {
      const updateLikes = (comments: Comment[]): Comment[] => {
        return comments.map((comment) => {
          if (comment.id === commentId) {
            return { ...comment, likes: comment.likes + 1 };
          } else if (comment.replies) {
            return { ...comment, replies: updateLikes(comment.replies) };
          }
          return comment;
        });
      };

      return updateLikes(prevComments);
    });
  };

  const handleDislike = (commentId: string) => {
    setComments((prevComments) => {
      const updateDislikes = (comments: Comment[]): Comment[] => {
        return comments.map((comment) => {
          if (comment.id === commentId) {
            return { ...comment, dislikes: comment.dislikes + 1 };
          } else if (comment.replies) {
            return { ...comment, replies: updateDislikes(comment.replies) };
          }
          return comment;
        });
      };

      return updateDislikes(prevComments);
    });
  };

  return (
    <div className='space-y-4 p-4'>
      <h2 className='text-2xl font-bold mb-4'>Comments</h2>
      {comments.map((comment, index) => (
        <CommentComponent
          key={comment.id}
          comment={comment}
          onReply={handleReply}
          onLike={handleLike}
          onDislike={handleDislike}
          isLastReply={index === comments.length - 1}
        />
      ))}
    </div>
  );
}
