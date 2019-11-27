import { templates, select } from '../settings.js';
import AmountWidget from './AmountWidget.js';


export class Booking {
  constructor(reserwationWidget) {
    const thisBooking = this;
    thisBooking.render(reserwationWidget);
    thisBooking.initWidgets();
  }

  render(reserwationWidget) {
    const thisBooking = this;

    const bookingWidget = templates.bookingWidget();

    thisBooking.dom = {};

    thisBooking.dom.wrapper = reserwationWidget;

    thisBooking.dom.wrapper.innerHTML = bookingWidget;

    thisBooking.dom.peopleAmount = thisBooking.dom.wrapper.querySelector(select.booking.peopleAmount);
    
    thisBooking.dom.hoursAmount = thisBooking.dom.wrapper.querySelector(select.booking.hoursAmount);
  }

  initWidgets(){
    const thisBooking = this;

    thisBooking.peopleAmount = new AmountWidget(thisBooking.dom.peopleAmount);
    
    thisBooking.hoursAmount = new AmountWidget(thisBooking.dom.hoursAmount);

  }
}