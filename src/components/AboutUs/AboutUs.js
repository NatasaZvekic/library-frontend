import React, { Component } from 'react'
import Header from '../Header/Header'
import NewHead from '../Header/NewHead'
import Pasus from './Pasus'
export default class AboutUs extends Component {

    render() {
        return (
            <div>
                <NewHead />
                <Pasus index="1" title="LATEST NEWS" text={'Following the Government’s announcement of a relaxation of lockdown conditions, we are delighted to confirm that the Library will be able to open its building again on Monday 12 April. \n So we can manage numbers in accordance with social distancing requirements you’ll need to pre-book a slot if you want to work in the Library or browse the collection. You won’t need a booking, however, if you are simply dropping off or picking up books that have been set aside for you. \n As part of our reopening arrangements we’re pleased to announce that a new temporary reading room has been created on the first floor of TS Eliot House. The Art Reading Room has 14 desks adding to the number of socially distanced workspaces across the Library. \n The measures we introduced previously to keep the everybody safe will remain, and all members will need to wear a face covering in all areas of the building unless exempt, regardless of whether or not you have been vaccinated. \n We are grateful for your continued adherence to these requirements.'} />
                <Pasus index="2" title="FREE EVENING TOURS OF THE X LIBRARY" text={'Discover one of the worlds largest independent lending libraries, steeped in 175 years of history and housing a fascinating and varied collection.The  Library hosts regular free guided Tours on weekday evenings offering visitors the opportunity to see this unique historic literary oasis at first hand. \n Tours start at 6.00pm, lasting for about an hour. We can accommodate up to 18 people per tour and because numbers are limited, reservation is essential.  \n Bookings can be made through our on-line booking service by clicking on the dates shown for individual tours below. If tours are fully booked, it is possible to put yourself on a waiting list in the event that a place becomes available. \n The tour encompasses 45 minutes of walking involving many flights of stairs, and due to the nature of the building we are unable to offer lift access to all areas. The tour therefore may not be suitable if you have mobility problems - please inform us when you book and we will do our best to accommodate you. '} />
                <Pasus index="3" title="THE X LIBRARY" text={'The X Library is one of the worlds great lending libraries, with an amazing collection of over 1 million books, and an equally extraordinary history.Behind its elegant facade overlooking St. Jamess Square is a vast network of books, where since the mid-nineteenth century, seven buildings have been brought into one and a great centre of learning and ideas has been created. \n The Library is available to hire as an event space, find out more on our venue hire page.Our magical building has atmospheric bookstacks and beautiful spaces for members to work and relax in:Take a look at our 3D tour below. \n Alternatively use the button below to view it full screen.'} />
            </div>
        )
    }
}



