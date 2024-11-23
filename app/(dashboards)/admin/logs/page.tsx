'use client';

import { useState, useEffect, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import {
  AlertCircle,
  Download,
  Eye,
  Flag,
  Terminal,
  UserX,
  AlertTriangle,
} from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { toast } from '@/hooks/use-toast';
import { DatePickerWithRange } from '@/components/ui/date-range-picker';

// Mock data generator functions
const generateMockLogs = (count: number) => {
  const actions = [
    'Login',
    'Order Placed',
    'Profile Updated',
    'Failed Login Attempt',
    'Product Listed',
  ];
  const devices = ['iPhone', 'Android Phone', 'Windows PC', 'MacBook', 'iPad'];

  return Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    user: `user${Math.floor(Math.random() * 1000)}@example.com`,
    action: actions[Math.floor(Math.random() * actions.length)],
    timestamp: new Date(
      Date.now() - Math.floor(Math.random() * 7 * 24 * 60 * 60 * 1000)
    ).toISOString(),
    ip: `192.168.${Math.floor(Math.random() * 255)}.${Math.floor(
      Math.random() * 255
    )}`,
    device: devices[Math.floor(Math.random() * devices.length)],
  }));
};

const generateActivityData = () => {
  return ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => ({
    name: day,
    logins: Math.floor(Math.random() * 200) + 100,
    orders: Math.floor(Math.random() * 100) + 20,
    updates: Math.floor(Math.random() * 50) + 30,
  }));
};

export default function LogsActivityDashboard() {
  const [logs, setLogs] = useState(generateMockLogs(100));
  const [activityData, setActivityData] = useState(generateActivityData());
  const [searchTerm, setSearchTerm] = useState('');
  const [dateRange, setDateRange] = useState({
    from: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
    to: new Date(),
  });
  const [selectedAction, setSelectedAction] = useState('All');
  const [isRealTimeMonitoring, setIsRealTimeMonitoring] = useState(false);
  const [showAdminActions, setShowAdminActions] = useState(true);
  const [showConfigChanges, setShowConfigChanges] = useState(true);
  const [showPermissionChanges, setShowPermissionChanges] = useState(true);

  const filteredLogs = logs.filter(
    (log) =>
      (searchTerm === '' ||
        log.user.toLowerCase().includes(searchTerm.toLowerCase()) ||
        log.action.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (selectedAction === 'All' || log.action === selectedAction) &&
      new Date(log.timestamp) >= dateRange.from &&
      new Date(log.timestamp) <= dateRange.to
  );

  const handleExport = useCallback(() => {
    const csvContent =
      'data:text/csv;charset=utf-8,' +
      'User,Action,Timestamp,IP Address,Device\n' +
      filteredLogs
        .map(
          (log) =>
            `${log.user},${log.action},${log.timestamp},${log.ip},${log.device}`
        )
        .join('\n');

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', 'log_export.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    toast({
      title: 'Logs Exported',
      description: 'Your log data has been exported successfully.',
    });
  }, [filteredLogs]);

  const handleFlagUser = useCallback((user: string) => {
    toast({
      title: 'User Flagged',
      description: `${user} has been flagged for review.`,
      variant: 'destructive',
    });
  }, []);

  const handleTerminateSession = useCallback((user: string) => {
    setLogs((prevLogs) => prevLogs.filter((log) => log.user !== user));
    toast({
      title: 'Session Terminated',
      description: `Active session for ${user} has been terminated.`,
      variant: 'destructive',
    });
  }, []);

  useEffect(() => {
    if (isRealTimeMonitoring) {
      const interval = setInterval(() => {
        const newLog = generateMockLogs(1)[0];
        setLogs((prevLogs) => [newLog, ...prevLogs.slice(0, 99)]);

        setActivityData((prevData) => {
          const newData = [...prevData];
          const today = newData[newData.length - 1];
          today.logins += 1;
          if (newLog.action === 'Order Placed') today.orders += 1;
          if (newLog.action === 'Profile Updated') today.updates += 1;
          return newData;
        });
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [isRealTimeMonitoring]);

  return (
    <div className='space-y-8'>
      <div className='flex justify-between items-center'>
        <h1 className='text-4xl font-bold'>Logs and Activity History</h1>
        <div className='flex items-center space-x-4'>
          <Button onClick={handleExport}>
            <Download className='mr-2 h-4 w-4' /> Export Logs
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant='outline'>Actions</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Quick Actions</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                onClick={() =>
                  toast({
                    title: 'Generating Report',
                    description: 'Full activity report is being generated.',
                  })
                }
              >
                Generate Full Report
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() =>
                  toast({
                    title: 'Archiving Logs',
                    description: 'Logs older than 30 days are being archived.',
                  })
                }
              >
                Archive Old Logs
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <Tabs defaultValue='user-activity' className='space-y-4'>
        <TabsList>
          <TabsTrigger value='user-activity'>User Activity</TabsTrigger>
          <TabsTrigger value='internal-audit'>Internal Audit</TabsTrigger>
          <TabsTrigger value='security-alerts'>Security Alerts</TabsTrigger>
        </TabsList>

        <TabsContent value='user-activity'>
          <Card>
            <CardHeader>
              <CardTitle>User Activity Tracking</CardTitle>
              <CardDescription>
                Monitor and analyze user actions across the platform
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className='flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mb-4'>
                <div className='flex-1'>
                  <Input
                    placeholder='Search by user or action'
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className='w-full'
                  />
                </div>
                <DatePickerWithRange date={dateRange} setDate={setDateRange} />
                <Select
                  value={selectedAction}
                  onValueChange={setSelectedAction}
                >
                  <SelectTrigger className='w-[180px]'>
                    <SelectValue placeholder='Select action' />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value='All'>All Actions</SelectItem>
                    <SelectItem value='Login'>Login</SelectItem>
                    <SelectItem value='Order Placed'>Order Placed</SelectItem>
                    <SelectItem value='Profile Updated'>
                      Profile Updated
                    </SelectItem>
                    <SelectItem value='Failed Login Attempt'>
                      Failed Login
                    </SelectItem>
                    <SelectItem value='Product Listed'>
                      Product Listed
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className='border rounded-md overflow-hidden'>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>User</TableHead>
                      <TableHead>Action</TableHead>
                      <TableHead>Timestamp</TableHead>
                      <TableHead>IP Address</TableHead>
                      <TableHead>Device</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredLogs.map((log) => (
                      <TableRow key={log.id}>
                        <TableCell>{log.user}</TableCell>
                        <TableCell>
                          <Badge
                            variant={
                              log.action === 'Failed Login Attempt'
                                ? 'destructive'
                                : 'default'
                            }
                          >
                            {log.action}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          {new Date(log.timestamp).toLocaleString()}
                        </TableCell>
                        <TableCell>{log.ip}</TableCell>
                        <TableCell>{log.device}</TableCell>
                        <TableCell>
                          <Button
                            variant='ghost'
                            size='icon'
                            onClick={() => handleFlagUser(log.user)}
                          >
                            <Flag className='h-4 w-4' />
                          </Button>
                          <Button
                            variant='ghost'
                            size='icon'
                            onClick={() => handleTerminateSession(log.user)}
                          >
                            <UserX className='h-4 w-4' />
                          </Button>
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button variant='ghost' size='icon'>
                                <Eye className='h-4 w-4' />
                              </Button>
                            </DialogTrigger>
                            <DialogContent>
                              <DialogHeader>
                                <DialogTitle>User Activity Details</DialogTitle>
                                <DialogDescription>
                                  Detailed information about the user's
                                  activity.
                                </DialogDescription>
                              </DialogHeader>
                              <div className='grid gap-4 py-4'>
                                <div className='grid grid-cols-4 items-center gap-4'>
                                  <Label htmlFor='user'>User</Label>
                                  <Input
                                    id='user'
                                    value={log.user}
                                    readOnly
                                    className='col-span-3'
                                  />
                                </div>
                                <div className='grid grid-cols-4 items-center gap-4'>
                                  <Label htmlFor='action'>Action</Label>
                                  <Input
                                    id='action'
                                    value={log.action}
                                    readOnly
                                    className='col-span-3'
                                  />
                                </div>
                                <div className='grid grid-cols-4 items-center gap-4'>
                                  <Label htmlFor='timestamp'>Timestamp</Label>
                                  <Input
                                    id='timestamp'
                                    value={new Date(
                                      log.timestamp
                                    ).toLocaleString()}
                                    readOnly
                                    className='col-span-3'
                                  />
                                </div>
                                <div className='grid grid-cols-4 items-center gap-4'>
                                  <Label htmlFor='ip'>IP Address</Label>
                                  <Input
                                    id='ip'
                                    value={log.ip}
                                    readOnly
                                    className='col-span-3'
                                  />
                                </div>
                                <div className='grid grid-cols-4 items-center gap-4'>
                                  <Label htmlFor='device'>Device</Label>
                                  <Input
                                    id='device'
                                    value={log.device}
                                    readOnly
                                    className='col-span-3'
                                  />
                                </div>
                              </div>
                            </DialogContent>
                          </Dialog>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value='internal-audit'>
          <Card>
            <CardHeader>
              <CardTitle>Internal Audit Logs</CardTitle>
              <CardDescription>
                Track admin actions and system changes
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className='space-y-4'>
                <div className='flex flex-wrap gap-4'>
                  <div className='flex items-center space-x-2'>
                    <Switch
                      id='admin-actions'
                      checked={showAdminActions}
                      onCheckedChange={setShowAdminActions}
                    />
                    <Label htmlFor='admin-actions'>Show Admin Actions</Label>
                  </div>
                  <div className='flex items-center space-x-2'>
                    <Switch
                      id='config-changes'
                      checked={showConfigChanges}
                      onCheckedChange={setShowConfigChanges}
                    />
                    <Label htmlFor='config-changes'>
                      Show Configuration Changes
                    </Label>
                  </div>
                  <div className='flex items-center space-x-2'>
                    <Switch
                      id='permission-changes'
                      checked={showPermissionChanges}
                      onCheckedChange={setShowPermissionChanges}
                    />
                    <Label htmlFor='permission-changes'>
                      Show Permission Changes
                    </Label>
                  </div>
                </div>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Admin</TableHead>
                      <TableHead>Action</TableHead>
                      <TableHead>Timestamp</TableHead>
                      <TableHead>Details</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {showAdminActions && (
                      <TableRow>
                        <TableCell>admin@example.com</TableCell>
                        <TableCell>Updated User Permissions</TableCell>
                        <TableCell>{new Date().toLocaleString()}</TableCell>
                        <TableCell>
                          Changed role for user123 from 'User' to 'Moderator'
                        </TableCell>
                      </TableRow>
                    )}
                    {showConfigChanges && (
                      <TableRow>
                        <TableCell>superadmin@example.com</TableCell>
                        <TableCell>Modified Transaction Fees</TableCell>
                        <TableCell>
                          {new Date(Date.now() - 3600000).toLocaleString()}
                        </TableCell>
                        <TableCell>
                          Updated transaction fee from 2.5% to 2.7%
                        </TableCell>
                      </TableRow>
                    )}
                    {showPermissionChanges && (
                      <TableRow>
                        <TableCell>admin@example.com</TableCell>
                        <TableCell>Added New Role</TableCell>
                        <TableCell>
                          {new Date(Date.now() - 7200000).toLocaleString()}
                        </TableCell>
                        <TableCell>
                          Created 'Content Manager' role with limited
                          permissions
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value='security-alerts'>
          <Card>
            <CardHeader>
              <CardTitle>Security Alerts</CardTitle>
              <CardDescription>
                View and manage security-related notifications
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className='space-y-4'>
                <div className='flex items-center justify-between p-4 bg-yellow-100 rounded-md'>
                  <div className='flex items-center space-x-2'>
                    <AlertTriangle className='h-5 w-5 text-yellow-600' />
                    <span className='font-medium text-yellow-600'>
                      Multiple failed login attempts detected
                    </span>
                  </div>
                  <Badge variant='outline'>High Priority</Badge>
                </div>
                <div className='flex items-center justify-between p-4 bg-red-100 rounded-md'>
                  <div className='flex items-center space-x-2'>
                    <AlertCircle className='h-5 w-5 text-red-600' />
                    <span className='font-medium text-red-600'>
                      Unusual account activity detected
                    </span>
                  </div>
                  <Badge variant='outline'>Critical</Badge>
                </div>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Alert Type</TableHead>
                      <TableHead>Description</TableHead>
                      <TableHead>Timestamp</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Action</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>Login Attempt</TableCell>
                      <TableCell>
                        5 failed login attempts for user john@example.com
                      </TableCell>
                      <TableCell>{new Date().toLocaleString()}</TableCell>
                      <TableCell>
                        <Badge>Investigating</Badge>
                      </TableCell>
                      <TableCell>
                        <Button
                          variant='outline'
                          size='sm'
                          onClick={() =>
                            toast({
                              title: 'Alert Resolved',
                              description:
                                'The login attempt alert has been marked as resolved.',
                            })
                          }
                        >
                          Resolve
                        </Button>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Unusual Activity</TableCell>
                      <TableCell>
                        High-value purchases from new account
                      </TableCell>
                      <TableCell>
                        {new Date(Date.now() - 3600000).toLocaleString()}
                      </TableCell>
                      <TableCell>
                        <Badge variant='outline'>Resolved</Badge>
                      </TableCell>
                      <TableCell>
                        <Button
                          variant='outline'
                          size='sm'
                          onClick={() =>
                            toast({
                              title: 'Case Reopened',
                              description:
                                'The unusual activity case has been reopened for further investigation.',
                            })
                          }
                        >
                          Reopen
                        </Button>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <Card>
        <CardHeader>
          <CardTitle>Activity Overview</CardTitle>
          <CardDescription>
            Visualize user activity trends over time
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width='100%' height={300}>
            <LineChart data={activityData}>
              <CartesianGrid strokeDasharray='3 3' />
              <XAxis dataKey='name' />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type='monotone' dataKey='logins' stroke='#8884d8' />
              <Line type='monotone' dataKey='orders' stroke='#82ca9d' />
              <Line type='monotone' dataKey='updates' stroke='#ffc658' />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <div className='flex justify-between items-center'>
        <Button
          variant='outline'
          onClick={() =>
            toast({
              title: 'Log Console Opened',
              description: 'The log console has been opened in a new window.',
            })
          }
        >
          <Terminal className='mr-2 h-4 w-4' />
          Open Log Console
        </Button>
        <div className='flex items-center space-x-2'>
          <Switch
            id='real-time-monitoring'
            checked={isRealTimeMonitoring}
            onCheckedChange={setIsRealTimeMonitoring}
          />
          <Label htmlFor='real-time-monitoring'>
            Enable Real-time Monitoring
          </Label>
        </div>
      </div>
    </div>
  );
}
