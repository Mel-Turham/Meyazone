'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { format } from 'date-fns';
import {
  Calendar as CalendarIcon,
  Search,
  Download,
  AlertCircle,
} from 'lucide-react';
import { Calendar } from '@/components/ui/calendar';

interface OrdersInterface {
  id: string;
  client: string;
  vendeur: string;
  livreur: string;
  montant: number;
  statut: string;
}

export default function ProductsManagement() {
  const [activeTab, setActiveTab] = useState('commandes');
  const [selectedOrder, setSelectedOrder] = useState<OrdersInterface | null>(
    null
  );
  const [date, setDate] = useState<Date | undefined>(new Date());

  // Données simulées (à remplacer par des appels API réels)
  const pendingOrders = [
    {
      id: '001',
      client: 'Jean Dupont',
      vendeur: 'Tech Store',
      livreur: 'Speedy',
      montant: 299.99,
      statut: 'En attente',
    },
    {
      id: '002',
      client: 'Marie Martin',
      vendeur: 'Fashion Outlet',
      livreur: 'Express',
      montant: 89.5,
      statut: 'En préparation',
    },
  ];

  const orderHistory = [
    {
      id: '003',
      client: 'Alice Johnson',
      vendeur: 'Home Goods',
      livreur: 'Rapid',
      montant: 150.0,
      statut: 'Livré',
      date: '2023-05-15',
    },
    {
      id: '004',
      client: 'Robert Brown',
      vendeur: 'Sports Gear',
      livreur: 'Quick',
      montant: 75.25,
      statut: 'Annulé',
      date: '2023-05-14',
    },
  ];

  const problemOrders = [
    {
      id: '005',
      client: 'Eve Wilson',
      vendeur: 'Electronics Pro',
      livreur: 'Fast',
      montant: 499.99,
      statut: 'Litige',
      probleme: 'Produit défectueux',
    },
  ];

  const transactions = [
    {
      id: 'T001',
      type: 'Achat',
      montant: 299.99,
      date: '2023-05-15',
      vendeur: 'Tech Store',
      client: 'Jean Dupont',
    },
    {
      id: 'T002',
      type: 'Remboursement',
      montant: -89.5,
      date: '2023-05-14',
      vendeur: 'Fashion Outlet',
      client: 'Marie Martin',
    },
  ];

  const commissions = [
    { id: 'C001', vendeur: 'Tech Store', montant: 29.99, statut: 'Payé' },
    {
      id: 'C002',
      vendeur: 'Fashion Outlet',
      montant: 8.95,
      statut: 'En attente',
    },
  ];

  const revenueData = [
    { mois: 'Jan', revenus: 4000 },
    { mois: 'Fév', revenus: 3000 },
    { mois: 'Mar', revenus: 5000 },
    { mois: 'Avr', revenus: 4500 },
    { mois: 'Mai', revenus: 6000 },
    { mois: 'Juin', revenus: 5500 },
    { mois: 'July', revenus: 5500 },
    { mois: 'Aug', revenus: 9500 },
    { mois: 'Sep', revenus: 500 },
    { mois: 'Oct', revenus: 5053 },
    { mois: 'Nov', revenus: 4500 },
  ];

  return (
    <>
      <div className='flex items-center justify-between'>
        <div className='flex items-center'>
          <div className='spayce-y-4 '>
            <h2 className='text-3xl font-medium'>Products Management</h2>
            <p className='text-muted-foreground'>
              Manage and monitor products across the platform.
            </p>
          </div>
        </div>
      </div>

      <Tabs
        value={activeTab}
        onValueChange={setActiveTab}
        className='space-y-8 mt-9'
      >
        <TabsList className='grid w-full grid-cols-2  rounded-lg p-1'>
          <TabsTrigger value='commandes' className='rounded-md'>
            Gestion des Commandes
          </TabsTrigger>
          <TabsTrigger value='finances' className='rounded-md'>
            Suivi des Paiements et Finances
          </TabsTrigger>
        </TabsList>

        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
        >
          <TabsContent value='commandes' className='space-y-8'>
            <Card>
              <CardHeader>
                <CardTitle className='text-2xl'>Commandes en Attente</CardTitle>
                <CardDescription>
                  Liste des commandes en attente de traitement.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className='mb-4 flex flex-wrap justify-between items-center gap-4'>
                  <Input
                    placeholder='Rechercher des commandes...'
                    className='max-w-sm'
                  />
                  <div className='flex flex-wrap gap-2'>
                    <Select>
                      <SelectTrigger className='w-[180px]'>
                        <SelectValue placeholder='Filtrer par statut' />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value='all'>Tous les statuts</SelectItem>
                        <SelectItem value='en_attente'>En attente</SelectItem>
                        <SelectItem value='en_preparation'>
                          En préparation
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    <Button variant='outline'>
                      <Search className='mr-2 h-4 w-4' /> Recherche avancée
                    </Button>
                  </div>
                </div>
                <div className='overflow-x-auto'>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>ID Commande</TableHead>
                        <TableHead>Client</TableHead>
                        <TableHead>Vendeur</TableHead>
                        <TableHead>Livreur</TableHead>
                        <TableHead>Montant</TableHead>
                        <TableHead>Statut</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {pendingOrders.map((order) => (
                        <TableRow key={order.id}>
                          <TableCell>{order.id}</TableCell>
                          <TableCell>{order.client}</TableCell>
                          <TableCell>{order.vendeur}</TableCell>
                          <TableCell>{order.livreur}</TableCell>
                          <TableCell>{order.montant.toFixed(2)} €</TableCell>
                          <TableCell>
                            <Badge
                              variant={
                                order.statut === 'En attente'
                                  ? 'outline'
                                  : 'secondary'
                              }
                            >
                              {order.statut}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <Dialog>
                              <DialogTrigger asChild>
                                <Button
                                  variant='ghost'
                                  size='sm'
                                  onClick={() => setSelectedOrder(order)}
                                >
                                  Détails
                                </Button>
                              </DialogTrigger>
                              <DialogContent>
                                <DialogHeader>
                                  <DialogTitle>
                                    Détails de la Commande - {selectedOrder?.id}
                                  </DialogTitle>
                                  <DialogDescription>
                                    Client: {selectedOrder?.client}
                                    <br />
                                    Vendeur: {selectedOrder?.vendeur}
                                    <br />
                                    Livreur: {selectedOrder?.livreur}
                                    <br />
                                    Montant: {selectedOrder?.montant.toFixed(
                                      2
                                    )}{' '}
                                    €<br />
                                    Statut: {selectedOrder?.statut}
                                  </DialogDescription>
                                </DialogHeader>
                                <div className='flex justify-end gap-2 mt-4'>
                                  <Button variant='outline'>
                                    Mettre à jour le statut
                                  </Button>
                                  <Button variant='destructive'>
                                    Annuler la commande
                                  </Button>
                                </div>
                              </DialogContent>
                            </Dialog>
                            <Button variant='ghost' size='sm'>
                              Mettre à jour
                            </Button>
                            <Button variant='ghost' size='sm'>
                              Annuler
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className='text-2xl'>
                  Historique des Commandes
                </CardTitle>
                <CardDescription>
                  Liste complète de toutes les commandes passées.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className='mb-4 flex flex-wrap justify-between items-center gap-4'>
                  <Input
                    placeholder="Rechercher dans l'historique..."
                    className='max-w-sm'
                  />
                  <div className=' flex items-center gap-4'>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant='outline'
                          className='w-[240px]  justify-start text-left font-normal'
                        >
                          <CalendarIcon className='mr-2 h-4 w-4' />
                          {date ? (
                            format(date, 'PPP')
                          ) : (
                            <span>Choisir une date</span>
                          )}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent
                        className='w-auto p-0 flex-none'
                        align='start'
                      >
                        <Calendar
                          mode='single'
                          selected={date}
                          onSelect={setDate}
                        />
                      </PopoverContent>
                    </Popover>

                    <Button variant='outline'>
                      <Search className='mr-2 h-4 w-4' /> Recherche avancée
                    </Button>
                  </div>
                </div>
                <div className='overflow-x-auto'>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>ID Commande</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Client</TableHead>
                        <TableHead>Vendeur</TableHead>
                        <TableHead>Livreur</TableHead>
                        <TableHead>Montant</TableHead>
                        <TableHead>Statut</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {orderHistory.map((order) => (
                        <TableRow key={order.id}>
                          <TableCell>{order.id}</TableCell>
                          <TableCell>{order.date}</TableCell>
                          <TableCell>{order.client}</TableCell>
                          <TableCell>{order.vendeur}</TableCell>
                          <TableCell>{order.livreur}</TableCell>
                          <TableCell>{order.montant.toFixed(2)} €</TableCell>
                          <TableCell>
                            <Badge
                              variant={
                                order.statut === 'Livré'
                                  ? 'outline'
                                  : 'destructive'
                              }
                            >
                              {order.statut}
                            </Badge>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className='text-2xl'>Commandes à Problème</CardTitle>
                <CardDescription>
                  Commandes avec des problèmes signalés ou des litiges.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className='overflow-x-auto'>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>ID Commande</TableHead>
                        <TableHead>Client</TableHead>
                        <TableHead>Vendeur</TableHead>
                        <TableHead>Livreur</TableHead>
                        <TableHead>Montant</TableHead>
                        <TableHead>Statut</TableHead>
                        <TableHead>Problème</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {problemOrders.map((order) => (
                        <TableRow key={order.id}>
                          <TableCell>{order.id}</TableCell>
                          <TableCell>{order.client}</TableCell>
                          <TableCell>{order.vendeur}</TableCell>
                          <TableCell>{order.livreur}</TableCell>
                          <TableCell>{order.montant.toFixed(2)} €</TableCell>
                          <TableCell>
                            <Badge variant='destructive'>{order.statut}</Badge>
                          </TableCell>
                          <TableCell>{order.probleme}</TableCell>
                          <TableCell>
                            <Dialog>
                              <DialogTrigger asChild>
                                <Button variant='ghost' size='sm'>
                                  <AlertCircle className='mr-2 h-4 w-4' />{' '}
                                  Résoudre
                                </Button>
                              </DialogTrigger>
                              <DialogContent>
                                <DialogHeader>
                                  <DialogTitle>
                                    Résolution du Problème - Commande {order.id}
                                  </DialogTitle>
                                  <DialogDescription>
                                    Problème: {order.probleme}
                                    <br />
                                    Client: {order.client}
                                    <br />
                                    Vendeur: {order.vendeur}
                                    <br />
                                    Livreur: {order.livreur}
                                  </DialogDescription>
                                </DialogHeader>
                                <div className='mt-4 space-y-4'>
                                  <Select>
                                    <SelectTrigger>
                                      <SelectValue placeholder='Choisir une action' />
                                    </SelectTrigger>
                                    <SelectContent>
                                      <SelectItem value='contact_client'>
                                        Contacter le client
                                      </SelectItem>
                                      <SelectItem value='contact_vendeur'>
                                        Contacter le vendeur
                                      </SelectItem>
                                      <SelectItem value='contact_livreur'>
                                        Contacter le livreur
                                      </SelectItem>
                                      <SelectItem value='remboursement'>
                                        Effectuer un remboursement
                                      </SelectItem>
                                      <SelectItem value='remplacement'>
                                        Remplacer le produit
                                      </SelectItem>
                                    </SelectContent>
                                  </Select>
                                  <Button className='w-full'>
                                    Appliquer la résolution
                                  </Button>
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

          <TabsContent value='finances' className='space-y-8'>
            <Card>
              <CardHeader>
                <CardTitle className='text-2xl'>Aperçu des Revenus</CardTitle>
                <CardDescription>
                  Revenus mensuels pour l'année en cours.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className='h-[300px]'>
                  <ResponsiveContainer width='100%' height='100%'>
                    <BarChart data={revenueData}>
                      <CartesianGrid strokeDasharray='3 3' />
                      <XAxis dataKey='mois' />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey='revenus' fill='#8884d8' />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className='text-2xl'>Transactions</CardTitle>
                <CardDescription>
                  Historique de toutes les transactions financières.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className='mb-4 flex flex-wrap justify-between items-center gap-4'>
                  <Input
                    placeholder='Rechercher des transactions...'
                    className='max-w-sm'
                  />
                  <div className='flex flex-wrap gap-2'>
                    <Select>
                      <SelectTrigger className='w-[180px]'>
                        <SelectValue placeholder='Filtrer par type' />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value='all'>Tous les types</SelectItem>
                        <SelectItem value='achat'>Achats</SelectItem>
                        <SelectItem value='remboursement'>
                          Remboursements
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant='outline'
                          className='w-[240px] justify-start text-left font-normal'
                        >
                          <CalendarIcon className='mr-2 h-4 w-4' />
                          {date ? (
                            format(date, 'PPP')
                          ) : (
                            <span>Filtrer par date</span>
                          )}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className='w-auto p-0' align='start'>
                        <Calendar
                          mode='single'
                          selected={date}
                          onSelect={setDate}
                        />
                      </PopoverContent>
                    </Popover>
                    <Button variant='outline'>
                      <Search className='mr-2 h-4 w-4' /> Recherche avancée
                    </Button>
                  </div>
                </div>
                <div className='overflow-x-auto'>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>ID Transaction</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Type</TableHead>
                        <TableHead>Montant</TableHead>
                        <TableHead>Vendeur</TableHead>
                        <TableHead>Client</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {transactions.map((transaction) => (
                        <TableRow key={transaction.id}>
                          <TableCell>{transaction.id}</TableCell>
                          <TableCell>{transaction.date}</TableCell>
                          <TableCell>{transaction.type}</TableCell>
                          <TableCell
                            className={
                              transaction.montant < 0
                                ? 'text-red-500'
                                : 'text-green-500'
                            }
                          >
                            {Math.abs(transaction.montant).toFixed(2)} €
                          </TableCell>
                          <TableCell>{transaction.vendeur}</TableCell>
                          <TableCell>{transaction.client}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>

            <div className='grid gap-8'>
              <Card>
                <CardHeader>
                  <CardTitle className='text-2xl'>
                    Commissions et Paiements
                  </CardTitle>
                  <CardDescription>
                    Suivi des commissions et gestion des paiements aux vendeurs.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className='space-y-4'>
                    <div className='flex justify-between items-center'>
                      <span>Total des Commissions:</span>
                      <span className='font-bold text-green-500'>
                        1 234,56 €
                      </span>
                    </div>
                    <div className='flex justify-between items-center'>
                      <span>Paiements en Attente:</span>
                      <span className='font-bold text-yellow-500'>
                        987,65 €
                      </span>
                    </div>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>ID</TableHead>
                          <TableHead>Vendeur</TableHead>
                          <TableHead>Montant</TableHead>
                          <TableHead>Statut</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {commissions.map((commission) => (
                          <TableRow key={commission.id}>
                            <TableCell>{commission.id}</TableCell>
                            <TableCell>{commission.vendeur}</TableCell>
                            <TableCell>
                              {commission.montant.toFixed(2)} €
                            </TableCell>
                            <TableCell>
                              <Badge
                                variant={
                                  commission.statut === 'Payé'
                                    ? 'secondary'
                                    : 'destructive'
                                }
                              >
                                {commission.statut}
                              </Badge>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                    <Button className='w-fit'>Gérer les Paiements</Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className='text-2xl'>
                    Gestion des Remboursements
                  </CardTitle>
                  <CardDescription>
                    Traitement des demandes de remboursement clients.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className='space-y-4'>
                    <div className='flex justify-between items-center'>
                      <span>Remboursements en Attente:</span>
                      <span className='font-bold text-red-500'>3</span>
                    </div>
                    <div className='flex justify-between items-center'>
                      <span>Montant Total des Remboursements:</span>
                      <span className='font-bold text-red-500'>178,50 €</span>
                    </div>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>ID Commande</TableHead>
                          <TableHead>Client</TableHead>
                          <TableHead>Montant</TableHead>
                          <TableHead>Raison</TableHead>
                          <TableHead>Action</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell>R001</TableCell>
                          <TableCell>Alice Johnson</TableCell>
                          <TableCell>89,50 €</TableCell>
                          <TableCell>Produit défectueux</TableCell>
                          <TableCell>
                            <Button variant='outline' size='sm'>
                              Traiter
                            </Button>
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                    <Button className='w-fit'>Gérer les Remboursements</Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className='text-2xl'>Rapports Financiers</CardTitle>
                <CardDescription>
                  Statistiques financières détaillées et rapports exportables.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className='mb-6 space-y-4'>
                  <div className='flex justify-between items-center'>
                    <span>Revenus Totaux (Ce Mois):</span>
                    <span className='font-bold text-green-500'>
                      15 678,90 €
                    </span>
                  </div>
                  <div className='flex justify-between items-center'>
                    <span>Revenus Totaux (Mois Dernier):</span>
                    <span className='font-bold text-blue-500'>14 567,89 €</span>
                  </div>
                  <div className='flex justify-between items-center'>
                    <span>Taux de Croissance:</span>
                    <span className='font-bold text-green-500'>+7,6%</span>
                  </div>
                </div>
                <div className='flex flex-wrap gap-4'>
                  <Button variant='outline'>
                    <Download className='mr-2 h-4 w-4' /> Exporter en CSV
                  </Button>
                  <Button variant='outline'>
                    <Download className='mr-2 h-4 w-4' /> Exporter en Excel
                  </Button>
                  <Select>
                    <SelectTrigger className='w-[180px]'>
                      <SelectValue placeholder='Choisir une période' />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value='this_month'>Ce mois</SelectItem>
                      <SelectItem value='last_month'>Mois dernier</SelectItem>
                      <SelectItem value='this_year'>Cette année</SelectItem>
                      <SelectItem value='last_year'>Année dernière</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </motion.div>
      </Tabs>
    </>
  );
}
