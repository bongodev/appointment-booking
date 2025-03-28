import { Slot } from '@/types';

export const mockSlots: Slot[] = [
  {
    _id: '1',
    name: 'Slot 1',
    description: 'This is slot 1',
    date: '2025-02-14T00:00:00.000Z',
    startTime: '10:00',
    duration: 60,
    executive: {
      _id: 'exec1',
      name: 'John Doe',
      email: 'john@gmail.com',
      mobile: '1234567890',
      role: 'executive',
    },
    bookedUsers: [],
  },
  {
    _id: '2',
    name: 'Slot 2',
    description: 'This is slot 2',
    date: '2025-02-14T00:0:000.000Z',
    startTime: '11:00',
    duration: 60,
    executive: {
      _id: 'user2',
      name: 'Alice Johnson',
      email: 'alice@gmail.com',
      mobile: '2345678901',
      role: 'user',
    },
    bookedUsers: [],
  },
  {
    _id: '3',
    name: 'Slot 3',
    description: 'This is slot 3',
    date: '2025-02-14T00:00:00.000Z',
    startTime: '12:00',
    duration: 60,
    executive: {
      _id: 'support3',
      name: 'Bob Smith',
      email: 'bob@gmail.com',
      mobile: '3456789012',
      role: 'support',
    },
    bookedUsers: [],
  },
  {
    _id: '4',
    name: 'Slot 4',
    description: 'This is slot 4',
    date: '2025-02-14T00:00:00.000Z',
    startTime: '13:00',
    duration: 60,
    executive: {
      _id: 'admin4',
      name: 'Carol White',
      email: 'carol@gmail.com',
      mobile: '4567890123',
      role: 'admin',
    },
    bookedUsers: [],
  },
  {
    _id: '5',
    name: 'Slot 5',
    description: 'This is slot 5',
    date: '2025-02-15T00:00:00.000Z',
    startTime: '10:00',
    duration: 60,
    executive: {
      _id: 'exec5',
      name: 'David Lee',
      email: 'david@gmail.com',
      mobile: '5678901234',
      role: 'executive',
    },
    bookedUsers: [],
  },
  {
    _id: '6',
    name: 'Slot 6',
    description: 'This is slot 6',
    date: '2025-02-15T00:00:00.000Z',
    startTime: '11:00',
    duration: 60,
    executive: {
      _id: 'user6',
      name: 'Eva Green',
      email: 'eva@gmail.com',
      mobile: '6789012345',
      role: 'user',
    },
    bookedUsers: [],
  },
  {
    _id: '7',
    name: 'Slot 7',
    description: 'This is slot 7',
    date: '2025-02-15T00:00:00.000Z',
    startTime: '12:00',
    duration: 60,
    executive: {
      _id: 'support7',
      name: 'Frank Black',
      email: 'frank@gmail.com',
      mobile: '7890123456',
      role: 'support',
    },
    bookedUsers: [],
  },
  {
    _id: '8',
    name: 'Slot 8',
    description: 'This is slot 8',
    date: '2025-02-15T00:00:00.000Z',
    startTime: '13:00',
    duration: 60,
    executive: {
      _id: 'admin8',
      name: 'Grace Brown',
      email: 'grace@gmail.com',
      mobile: '8901234567',
      role: 'admin',
    },
    bookedUsers: [],
  },
  {
    _id: '9',
    name: 'Slot 9',
    description: 'This is slot 9',
    date: '2025-02-16T00:00:00.000Z',
    startTime: '10:00',
    duration: 60,
    executive: {
      _id: 'exec9',
      name: 'Henry Adams',
      email: 'henry@gmail.com',
      mobile: '9012345678',
      role: 'executive',
    },
    bookedUsers: [],
  },
  {
    _id: '10',
    name: 'Slot 10',
    description: 'This is slot 10',
    date: '2025-02-16T00:00:00.000Z',
    startTime: '11:00',
    duration: 60,
    executive: {
      _id: 'user10',
      name: 'Isabella Clark',
      email: 'isabella@gmail.com',
      mobile: '0123456789',
      role: 'user',
    },
    bookedUsers: [],
  },
];

export const slotTableRows = [
  {
    time: '8.00AM - 9.00AM',
    sunSlot: '',
    monSlot: '',
    tuesSlot: '',
    wednesSlot: '',
    thursSlot: '',
    friSlot: '',
    saturSlot: '',
  },
  {
    time: '9.00AM - 10.00AM',
    sunSlot: '',
    monSlot: '',
    tuesSlot: '',
    wednesSlot: '',
    thursSlot: '',
    friSlot: '',
    saturSlot: '',
  },
  {
    time: '10.00AM - 11.00AM',
    sunSlot: '',
    monSlot: '',
    tuesSlot: '',
    wednesSlot: '',
    thursSlot: '',
    friSlot: '',
    saturSlot: '',
  },
  {
    time: '11.00AM - 12.00PM',
    sunSlot: '',
    monSlot: '',
    tuesSlot: '',
    wednesSlot: '',
    thursSlot: '',
    friSlot: '',
    saturSlot: '',
  },
  {
    time: '12.00PM - 1.00PM',
    sunSlot: '',
    monSlot: '',
    tuesSlot: '',
    wednesSlot: '',
    thursSlot: '',
    friSlot: '',
    saturSlot: '',
  },
  {
    time: '1.00PM - 2.00PM',
    sunSlot: '',
    monSlot: '',
    tuesSlot: '',
    wednesSlot: '',
    thursSlot: '',
    friSlot: '',
    saturSlot: '',
  },
  {
    time: '4.00PM - 5.00PM',
    sunSlot: '',
    monSlot: '',
    tuesSlot: '',
    wednesSlot: '',
    thursSlot: '',
    friSlot: '',
    saturSlot: '',
  },
  {
    time: '5.00PM - 6.00PM',
    sunSlot: '',
    monSlot: '',
    tuesSlot: '',
    wednesSlot: '',
    thursSlot: '',
    friSlot: '',
    saturSlot: '',
  },
  {
    time: '6.00PM - 7.00PM',
    sunSlot: '',
    monSlot: '',
    tuesSlot: '',
    wednesSlot: '',
    thursSlot: '',
    friSlot: '',
    saturSlot: '',
  },
  {
    time: '7.00PM - 8.00PM',
    sunSlot: '',
    monSlot: '',
    tuesSlot: '',
    wednesSlot: '',
    thursSlot: '',
    friSlot: '',
    saturSlot: '',
  },
  {
    time: '8.00PM - 9.00PM',
    sunSlot: '',
    monSlot: '',
    tuesSlot: '',
    wednesSlot: '',
    thursSlot: '',
    friSlot: '',
    saturSlot: '',
  },
  {
    time: '9.00PM - 10.00PM',
    sunSlot: '',
    monSlot: '',
    tuesSlot: '',
    wednesSlot: '',
    thursSlot: '',
    friSlot: '',
    saturSlot: '',
  },
  {
    time: '10.00PM - 11.00PM',
    sunSlot: '',
    monSlot: '',
    tuesSlot: '',
    wednesSlot: '',
    thursSlot: '',
    friSlot: '',
    saturSlot: '',
  },
  {
    time: '11.00PM - 12.00AM',
    sunSlot: '',
    monSlot: '',
    tuesSlot: '',
    wednesSlot: '',
    thursSlot: '',
    friSlot: '',
    saturSlot: '',
  },
  {
    time: '12.00AM - 1.00AM',
    sunSlot: '',
    monSlot: '',
    tuesSlot: '',
    wednesSlot: '',
    thursSlot: '',
    friSlot: '',
    saturSlot: '',
  },
  {
    time: '1.00AM - 2.00AM',
    sunSlot: '',
    monSlot: '',
    tuesSlot: '',
    wednesSlot: '',
    thursSlot: '',
    friSlot: '',
    saturSlot: '',
  },
  {
    time: '2.00AM - 3.00AM',
    sunSlot: '',
    monSlot: '',
    tuesSlot: '',
    wednesSlot: '',
    thursSlot: '',
    friSlot: '',
    saturSlot: '',
  },
  {
    time: '3.00AM - 4.00AM',
    sunSlot: '',
    monSlot: '',
    tuesSlot: '',
    wednesSlot: '',
    thursSlot: '',
    friSlot: '',
    saturSlot: '',
  },
  {
    time: '4.00AM - 5.00AM',
    sunSlot: '',
    monSlot: '',
    tuesSlot: '',
    wednesSlot: '',
    thursSlot: '',
    friSlot: '',
    saturSlot: '',
  },
  {
    time: '5.00AM - 6.00AM',
    sunSlot: '',
    monSlot: '',
    tuesSlot: '',
    wednesSlot: '',
    thursSlot: '',
    friSlot: '',
    saturSlot: '',
  },
  {
    time: '6.00AM - 7.00AM',
    sunSlot: '',
    monSlot: '',
    tuesSlot: '',
    wednesSlot: '',
    thursSlot: '',
    friSlot: '',
    saturSlot: '',
  },
  {
    time: '7.00AM - 8.00AM',
    sunSlot: '',
    monSlot: '',
    tuesSlot: '',
    wednesSlot: '',
    thursSlot: '',
    friSlot: '',
    saturSlot: '',
  },
];
