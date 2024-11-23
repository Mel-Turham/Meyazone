'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Settings, Shield, CreditCard, Gift, BarChart } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

export default function SettingsDashboard() {
  const [maintenanceMode, setMaintenanceMode] = useState(false);

  const handleSave = () => {
    toast({
      title: 'Settings saved',
      description: 'Your changes have been successfully saved.',
    });
  };

  return (
    <div className='space-y-8'>
      <div className='flex justify-between items-center'>
        <div className='space-y-3 max-w-md'>
          <h2 className='text-4xl font-medium'>Application Settings</h2>
          <p className='text-sm text-muted-foreground'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            vitae iure facilis quos cumque officiis obcaecati ratione tempora in
            ducimus.
          </p>
        </div>
        <Button
          onClick={handleSave}
          size='lg'
          className='bg-primary hover:bg-primary/90'
        >
          Save All Changes
        </Button>
      </div>

      <Tabs defaultValue='general' className='space-y-4'>
        <TabsList className='grid grid-cols-2 lg:grid-cols-5 gap-4'>
          <TabsTrigger value='general' className='flex items-center gap-2'>
            <Settings className='h-4 w-4' />
            General
          </TabsTrigger>
          <TabsTrigger value='tax' className='flex items-center gap-2'>
            <CreditCard className='h-4 w-4' />
            Tax & Fees
          </TabsTrigger>
          <TabsTrigger value='promotions' className='flex items-center gap-2'>
            <Gift className='h-4 w-4' />
            Promotions
          </TabsTrigger>
          <TabsTrigger value='security' className='flex items-center gap-2'>
            <Shield className='h-4 w-4' />
            Security
          </TabsTrigger>
          <TabsTrigger value='performance' className='flex items-center gap-2'>
            <BarChart className='h-4 w-4' />
            Performance
          </TabsTrigger>
        </TabsList>

        <TabsContent value='general'>
          <Card>
            <CardHeader>
              <CardTitle>General Configuration</CardTitle>
              <CardDescription>
                Manage global settings and user access control.
              </CardDescription>
            </CardHeader>
            <CardContent className='space-y-6'>
              <div className='space-y-2'>
                <Label htmlFor='privacy-policy'>Privacy Policy</Label>
                <Textarea
                  id='privacy-policy'
                  placeholder='Enter privacy policy...'
                  rows={4}
                />
              </div>
              <div className='space-y-2'>
                <Label htmlFor='terms-of-use'>Terms of Use</Label>
                <Textarea
                  id='terms-of-use'
                  placeholder='Enter terms of use...'
                  rows={4}
                />
              </div>
              <div className='space-y-2'>
                <Label>Localization Settings</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder='Select language' />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value='en'>English</SelectItem>
                    <SelectItem value='fr'>French</SelectItem>
                    <SelectItem value='es'>Spanish</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className='space-y-2'>
                <Label>Currency Format</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder='Select currency' />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value='usd'>USD ($)</SelectItem>
                    <SelectItem value='eur'>EUR (€)</SelectItem>
                    <SelectItem value='gbp'>GBP (£)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className='space-y-2'>
                <Label>User Access Control</Label>
                <div className='grid grid-cols-2 gap-4'>
                  {['Clients', 'Sellers', 'Delivery Agents'].map((role) => (
                    <div key={role} className='flex items-center space-x-2'>
                      <Switch id={`role-${role.toLowerCase()}`} />
                      <Label htmlFor={`role-${role.toLowerCase()}`}>
                        {role}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>
              <div className='space-y-2'>
                <Label>Notification Preferences</Label>
                <div className='grid grid-cols-2 gap-4'>
                  {[
                    'System Alerts',
                    'Order Updates',
                    'Payment Notifications',
                  ].map((notif) => (
                    <div key={notif} className='flex items-center space-x-2'>
                      <Switch
                        id={`notif-${notif.toLowerCase().replace(' ', '-')}`}
                      />
                      <Label
                        htmlFor={`notif-${notif
                          .toLowerCase()
                          .replace(' ', '-')}`}
                      >
                        {notif}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>
              <div className='flex items-center justify-between'>
                <Label htmlFor='maintenance-mode'>
                  System Maintenance Mode
                </Label>
                <Switch
                  id='maintenance-mode'
                  checked={maintenanceMode}
                  onCheckedChange={setMaintenanceMode}
                />
              </div>
              {maintenanceMode && (
                <div className='p-4 bg-yellow-100 rounded-md'>
                  <p className='text-yellow-800'>
                    Maintenance mode is active. Users will be notified of
                    scheduled downtime.
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value='tax'>
          <Card>
            <CardHeader>
              <CardTitle>Tax and Fee Management</CardTitle>
              <CardDescription>
                Configure taxes, transaction fees, and additional charges.
              </CardDescription>
            </CardHeader>
            <CardContent className='space-y-6'>
              <div className='space-y-2'>
                <Label>Product Tax Management</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder='Select tax region' />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value='global'>Global</SelectItem>
                    <SelectItem value='us'>United States</SelectItem>
                    <SelectItem value='eu'>European Union</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className='space-y-2'>
                <Label htmlFor='transaction-fee'>Transaction Fee (%)</Label>
                <Input
                  id='transaction-fee'
                  type='number'
                  placeholder='Enter transaction fee percentage'
                />
              </div>
              <div className='space-y-2'>
                <Label>VAT and Additional Fees</Label>
                <div className='grid grid-cols-2 gap-4'>
                  {['VAT', 'Shipping Fee', 'Handling Fee'].map((fee) => (
                    <div key={fee} className='flex items-center space-x-2'>
                      <Switch
                        id={`fee-${fee.toLowerCase().replace(' ', '-')}`}
                      />
                      <Label
                        htmlFor={`fee-${fee.toLowerCase().replace(' ', '-')}`}
                      >
                        {fee}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>
              <div className='space-y-2'>
                <Label>Discount and Coupon Taxation</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder='Select taxation method' />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value='inclusive'>Tax Inclusive</SelectItem>
                    <SelectItem value='exclusive'>Tax Exclusive</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value='promotions'>
          <Card>
            <CardHeader>
              <CardTitle>Offers and Promotions Management</CardTitle>
              <CardDescription>
                Manage campaigns, coupons, and discount rules.
              </CardDescription>
            </CardHeader>
            <CardContent className='space-y-6'>
              <div className='space-y-2'>
                <Label>Active Campaigns</Label>
                <div className='flex flex-wrap gap-2'>
                  <Badge variant='secondary'>Summer Sale</Badge>
                  <Badge variant='secondary'>New User Discount</Badge>
                  <Badge variant='secondary'>Holiday Special</Badge>
                </div>
              </div>
              <div className='space-y-2'>
                <Label htmlFor='coupon-code'>Generate Coupon Code</Label>
                <div className='flex space-x-2'>
                  <Input id='coupon-code' placeholder='Enter coupon code' />
                  <Button>Generate</Button>
                </div>
              </div>
              <div className='space-y-2'>
                <Label>Bulk Discount Rules</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder='Select discount type' />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value='percentage'>Percentage Off</SelectItem>
                    <SelectItem value='fixed'>Fixed Amount Off</SelectItem>
                    <SelectItem value='bogo'>Buy One Get One</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className='space-y-2'>
                <Label>Seasonal Promotions</Label>
                <div className='grid grid-cols-2 gap-4'>
                  {['Spring', 'Summer', 'Fall', 'Winter'].map((season) => (
                    <div key={season} className='flex items-center space-x-2'>
                      <Switch id={`season-${season.toLowerCase()}`} />
                      <Label htmlFor={`season-${season.toLowerCase()}`}>
                        {season}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>
              <Button className='w-full'>View Promotion Reports</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value='security'>
          <Card>
            <CardHeader>
              <CardTitle>Security and Compliance</CardTitle>
              <CardDescription>
                Manage data privacy, security logs, and authentication settings.
              </CardDescription>
            </CardHeader>
            <CardContent className='space-y-6'>
              <div className='space-y-2'>
                <Label>Data Privacy Compliance</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder='Select compliance standard' />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value='gdpr'>GDPR</SelectItem>
                    <SelectItem value='ccpa'>CCPA</SelectItem>
                    <SelectItem value='hipaa'>HIPAA</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className='space-y-2'>
                <Label>Security Logs</Label>
                <Button variant='outline' className='w-full'>
                  View Security Logs
                </Button>
              </div>
              <div className='flex items-center justify-between'>
                <Label htmlFor='two-factor'>
                  Two-Factor Authentication (2FA)
                </Label>
                <Switch id='two-factor' />
              </div>
              <div className='space-y-2'>
                <Label>Admin Action Audit Trail</Label>
                <Button variant='outline' className='w-full'>
                  View Audit Trail
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value='performance'>
          <Card>
            <CardHeader>
              <CardTitle>System Performance and Monitoring</CardTitle>
              <CardDescription>
                Monitor system health, analytics, and error reporting.
              </CardDescription>
            </CardHeader>
            <CardContent className='space-y-6'>
              <div className='space-y-2'>
                <Label>System Health</Label>
                <Progress value={80} className='w-full' />
                <p className='text-sm text-muted-foreground'>
                  Server Status: Good
                </p>
              </div>
              <div className='space-y-2'>
                <Label>Active Users</Label>
                <div className='text-2xl font-bold'>1,234</div>
                <p className='text-sm text-muted-foreground'>
                  Peak time: 2:00 PM - 4:00 PM
                </p>
              </div>
              <div className='space-y-2'>
                <Label>Popular Products</Label>
                <div className='flex flex-wrap gap-2'>
                  <Badge>Product A</Badge>
                  <Badge>Product B</Badge>
                  <Badge>Product C</Badge>
                </div>
              </div>
              <div className='space-y-2'>
                <Label>Error Monitoring</Label>
                <Button variant='outline' className='w-full'>
                  View Error Logs
                </Button>
              </div>
              <Button className='w-full'>Generate Performance Report</Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
