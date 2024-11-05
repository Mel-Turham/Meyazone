import { Button } from '@/components/ui/button';
import UsersTabs from './UsersTabs';

const UserManagementPage = () => {
  return (
    <>
      <div className='flex items-center justify-between'>
        <div className='flex items-center'>
          <div>
            <h2 className='text-2xl md:text-3xl font-bold'>User Management</h2>
            <p className='text-muted-foreground text-sm md:text-base'>
              Manage and monitor user accounts across the platform.
            </p>
          </div>
        </div>
        <Button>Add User</Button>
      </div>
      <div className='mt-10 '>
        <UsersTabs />
      </div>
    </>
  );
};

export default UserManagementPage;
