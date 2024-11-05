'use client';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { AnimatePresence, motion } from 'framer-motion';
import {
  Filter,
  MoreVertical,
  Search,
  Shield,
  ShoppingBag,
  SortAsc,
  SortDesc,
  Truck,
  UserCheck,
} from 'lucide-react';
import React, { useState } from 'react';
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from 'recharts';
const mockUsers = [
  {
    id: 1,
    name: 'Alice Johnson',
    email: 'alice@example.com',
    type: 'client',
    purchases: 15,
    status: 'active',
    lastLogin: '2023-04-01',
  },
  {
    id: 2,
    name: 'Bob Smith',
    email: 'bob@example.com',
    type: 'client',
    purchases: 8,
    status: 'suspended',
    lastLogin: '2023-03-28',
  },
  {
    id: 3,
    name: 'Charlie Brown',
    email: 'charlie@techstore.com',
    type: 'vendor',
    productsSold: 150,
    rating: 4.5,
    status: 'approved',
    lastLogin: '2023-04-02',
  },
  {
    id: 4,
    name: 'Diana Prince',
    email: 'diana@fashionboutique.com',
    type: 'vendor',
    productsSold: 89,
    rating: 4.2,
    status: 'pending',
    lastLogin: '2023-03-30',
  },
  {
    id: 5,
    name: 'Edward Norton',
    email: 'edward@delivery.com',
    type: 'delivery',
    deliveries: 56,
    rating: 4.8,
    status: 'active',
    lastLogin: '2023-04-03',
  },
  {
    id: 6,
    name: 'Fiona Gallagher',
    email: 'fiona@delivery.com',
    type: 'delivery',
    deliveries: 42,
    rating: 4.6,
    status: 'inactive',
    lastLogin: '2023-03-29',
  },
  {
    id: 7,
    name: 'George Clooney',
    email: 'george@admin.com',
    type: 'admin',
    role: 'Super Admin',
    lastLogin: '2023-04-04',
  },
  {
    id: 8,
    name: 'Helen Mirren',
    email: 'helen@admin.com',
    type: 'admin',
    role: 'Super Admin',
    lastLogin: '2023-04-01',
  },
];
const userTypeIcons = {
  client: <UserCheck size={16} />,
  vendor: <ShoppingBag size={16} />,
  delivery: <Truck size={16} />,
  admin: <Shield size={16} />,
};
const UsersTabs = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [sortField, setSortField] = useState('name');
  const [sortDirection, setSortDirection] = useState('asc');
  const [selectedUsers, setSelectedUsers] = useState<number[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  const filterData = (data: typeof mockUsers) => {
    return data
      .filter((user) => {
        const userName = user.name?.toLowerCase() ?? ''; // Optional chaining and default value
        const userEmail = user.email?.toLowerCase() ?? ''; // Optional chaining and default value
        const search = searchTerm?.toLowerCase() ?? '';

        return (
          (activeTab === 'all' || user.type === activeTab) &&
          (userName.includes(search) || userEmail.includes(search))
        );
      })
      .sort((a, b) => {
        // Check if sortField and sortDirection are defined before sorting
        if (sortField && sortDirection) {
          const fieldA = a[sortField as keyof typeof a];
          const fieldB = b[sortField as keyof typeof b];

          if (fieldA! < fieldB!) return sortDirection === 'asc' ? -1 : 1;
          if (fieldA! > fieldB!) return sortDirection === 'asc' ? 1 : -1;
        }
        return 0;
      });
  };

  const filteredUsers = filterData(mockUsers);

  const toggleSort = (field: string) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  const toggleUserSelection = (userId: number) => {
    setSelectedUsers((prev) =>
      prev.includes(userId)
        ? prev.filter((id) => id !== userId)
        : [...prev, userId]
    );
  };

  return (
    <>
      <Tabs
        value={activeTab}
        onValueChange={setActiveTab}
        className='space-y-4'
      >
        <div className='flex flex-col md:flex-row justify-between items-start md:items-center gap-4'>
          <TabsList className='flex-wrap mb-4'>
            <TabsTrigger value='all'>All Users</TabsTrigger>
            <TabsTrigger value='client'>Clients</TabsTrigger>
            <TabsTrigger value='vendor'>Vendors</TabsTrigger>
            <TabsTrigger value='delivery'>Delivery</TabsTrigger>
            <TabsTrigger value='admin'>Admins</TabsTrigger>
          </TabsList>
          <div className='flex items-center gap-2 w-full md:w-auto'>
            <div className='relative flex-grow md:flex-grow-0'>
              <Search
                className='absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400'
                size={18}
              />
              <Input
                placeholder='Search users...'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className='pl-8 w-full'
              />
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant='outline' size='icon'>
                  <Filter size={16} />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>Filter by Status</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Active</DropdownMenuItem>
                <DropdownMenuItem>Suspended</DropdownMenuItem>
                <DropdownMenuItem>Pending</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        <AnimatePresence mode='wait'>
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
          >
            <Card>
              <div className='overflow-x-auto'>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className='w-12'>
                        <Checkbox
                          checked={
                            selectedUsers.length === filteredUsers.length
                          }
                          onCheckedChange={(checked) => {
                            setSelectedUsers(
                              checked ? filteredUsers.map((u) => u.id) : []
                            );
                          }}
                        />
                      </TableHead>
                      <TableHead className='w-12'></TableHead>
                      <TableHead>
                        <Button
                          variant='ghost'
                          onClick={() => toggleSort('name')}
                        >
                          Name{' '}
                          {sortField === 'name' &&
                            (sortDirection === 'asc' ? (
                              <SortAsc size={16} />
                            ) : (
                              <SortDesc size={16} />
                            ))}
                        </Button>
                      </TableHead>
                      <TableHead className='hidden md:table-cell'>
                        Email
                      </TableHead>
                      <TableHead className='hidden md:table-cell'>
                        Type
                      </TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className='hidden lg:table-cell'>
                        <Button
                          variant='ghost'
                          onClick={() => toggleSort('lastLogin')}
                        >
                          Last Login{' '}
                          {sortField === 'lastLogin' &&
                            (sortDirection === 'asc' ? (
                              <SortAsc size={16} />
                            ) : (
                              <SortDesc size={16} />
                            ))}
                        </Button>
                      </TableHead>
                      <TableHead className='w-12'></TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredUsers.map((user) => (
                      <TableRow key={user.id}>
                        <TableCell>
                          <Checkbox
                            checked={selectedUsers.includes(user.id)}
                            onCheckedChange={() => toggleUserSelection(user.id)}
                          />
                        </TableCell>
                        <TableCell>
                          <Avatar>
                            <AvatarFallback>
                              {user.name.charAt(0)}
                            </AvatarFallback>
                          </Avatar>
                        </TableCell>
                        <TableCell className='font-medium'>
                          {user.name}
                        </TableCell>
                        <TableCell className='hidden md:table-cell'>
                          {user.email}
                        </TableCell>
                        <TableCell className='hidden md:table-cell'>
                          <div className='flex items-center gap-2'>
                            {
                              userTypeIcons[
                                user.type as keyof typeof userTypeIcons
                              ]
                            }
                            {user.type.charAt(0).toUpperCase() +
                              user.type.slice(1)}
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge
                            variant={
                              user.status === 'active'
                                ? 'default'
                                : user.status === 'suspended'
                                ? 'destructive'
                                : 'secondary'
                            }
                          >
                            {user.status}
                          </Badge>
                        </TableCell>
                        <TableCell className='hidden lg:table-cell'>
                          {user.lastLogin}
                        </TableCell>
                        <TableCell>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant='ghost' size='icon'>
                                <MoreVertical size={16} />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align='end'>
                              <DropdownMenuItem>View Details</DropdownMenuItem>
                              <DropdownMenuItem>Edit User</DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem className='text-red-600'>
                                Delete User
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </Card>
          </motion.div>
        </AnimatePresence>
      </Tabs>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mt-5'>
        <Card>
          <CardHeader>
            <CardTitle>User Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width='100%' height={300}>
              <PieChart>
                <Pie
                  data={[
                    {
                      name: 'Clients',
                      value: mockUsers.filter((u) => u.type === 'client')
                        .length,
                    },
                    {
                      name: 'Vendors',
                      value: mockUsers.filter((u) => u.type === 'vendor')
                        .length,
                    },
                    {
                      name: 'Delivery',
                      value: mockUsers.filter((u) => u.type === 'delivery')
                        .length,
                    },
                    {
                      name: 'Admins',
                      value: mockUsers.filter((u) => u.type === 'admin').length,
                    },
                  ]}
                  cx='50%'
                  cy='50%'
                  outerRadius={80}
                  fill='#8884d8'
                  dataKey='value'
                  label
                >
                  {mockUsers.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={
                        ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'][index % 4]
                      }
                    />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>New User Registrations</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width='100%' height={300}>
              <LineChart
                data={[
                  { name: 'Jan', users: 400 },
                  { name: 'Feb', users: 300 },
                  { name: 'Mar', users: 500 },
                  { name: 'Apr', users: 450 },
                  { name: 'May', users: 600 },
                  { name: 'Jun', users: 550 },
                ]}
              >
                <CartesianGrid strokeDasharray='3 3' />
                <XAxis dataKey='name' />
                <YAxis />
                <Tooltip />
                <Line type='monotone' dataKey='users' stroke='#8884d8' />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className='col-span-2'>
          <CardHeader>
            <CardTitle>User Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width='100%' height={300}>
              <BarChart
                data={[
                  { name: 'Mon', active: 400, inactive: 100 },
                  { name: 'Tue', active: 500, inactive: 150 },
                  { name: 'Wed', active: 600, inactive: 200 },
                  { name: 'Thu', active: 550, inactive: 180 },
                  { name: 'Fri', active: 700, inactive: 250 },
                  { name: 'Sat', active: 450, inactive: 300 },
                  { name: 'Sun', active: 350, inactive: 400 },
                ]}
              >
                <CartesianGrid strokeDasharray='3 3' />
                <XAxis dataKey='name' />
                <YAxis />
                <Tooltip />
                <Bar dataKey='active' fill='#8884d8' />
                <Bar dataKey='inactive' fill='#82ca9d' />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default UsersTabs;
