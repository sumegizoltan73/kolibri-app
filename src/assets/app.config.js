var config =
{
    apiurl: '/APH.FrontEnd',
    languages: ['hu','en','de'],
    menu: [
        { path: 'home', label: 'Home' },
        { path: 'booking', label: 'Booking' },
        { path: 'price', label: 'Price' },
        { path: 'offers', label: 'Offers' },
        { path: 'tour360', label: 'Tour360' },
        { path: 'admin', label: 'Admin' },
        { path: 'contact', label: 'Contact' }
    ],
    firm: {
        address: {
            zip: 'H-6500',
            country: 'Hungary',
            city: 'Baja',
            addressLine: 'Batthyány u. 18.'
        },
        url: 'kolibripanzio.eu',
        facebookUrl: 'https://www.facebook.com/Kolibri-Panzi%C3%B3-Baja-108113477188763/',
        email: 'nagysumegianita@gmail.com',
        mobile: '+36 (70) 382-8182',
        phone: '+36 (79) 611-386',
        partners: [
            { url: 'https://szallas.hu/kolibri-panzio-baja', label: 'szallas.hu' },
            { url: 'https://www.booking.com/hotel/hu/kolibri-panzia3.hu.html', label: 'booking.com' }
        ]
    },
    booking: {
        items: [
            { id: 'Room1', label: 'Booking.RoomWithOneBed', capacity: 1, price: '10 000 HUF', selectable: 1, isVisible: true },
            { id: 'Room2', label: 'Booking.DoubleRoom', capacity: 2, price: '14 000 HUF', selectable: 4, isVisible: true },
            { id: 'Room3', label: 'Booking.DoubleRoomWithExtraBed', capacity: 3, price: '15 000 HUF', selectable: 1, isVisible: true },
            { id: 'Room4', label: 'Booking.FamilyRoom', capacity: 3, price: '21 000 HUF', selectable: 1, isVisible: false },
            { id: 'Room5', label: 'Booking.Apartment', capacity: 4, price: '24 000 HUF', selectable: 1, isVisible: false },
            { id: 'Room6', label: 'Booking.TwinRoom', capacity: 2, price: '14 000 HUF', selectable: 4, isVisible: true }
        ]
    }
};