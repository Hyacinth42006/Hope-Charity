import { Calendar} from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import rrulePlugin from '@fullcalendar/rrule';
import { RRule, RRuleSet } from 'rrule';
import moment from 'moment';

const today = new Date();
    
// Set the start date to the beginning of the current month
const startDate = new Date(today.getFullYear(), today.getMonth(), 1);

// Set the end date to the end of the current month
let endDate = new Date(today.getFullYear(), today.getMonth() + 1, 0);

const rule = new RRule({
    freq: RRule.WEEKLY,
    // dtstart: new Date(Date.UTC(2023, 11, 6, 11, 0, 0)),
    interval: 2,
    wkst: RRule.WE,
    byweekday: RRule.WE,
    count: 5,
});

let occurrences = rule.between(startDate, endDate);

export const list = (()=>{
    const calendarList = document.querySelector('#calender__list');

    occurrences = rule.all();

    occurrences.forEach((occurrence, index) => {
        let formattedDate = formatting(occurrence);
        let fontWeight = 900 - index * 100;
        let opacity = 1 - index/5;
        appendToCalendarList(calendarList, formattedDate, fontWeight, opacity);
    });
    
    function formatting(date) {
        return moment(date).format("dddd, MMMM D");
    }
    
    function appendToCalendarList(container, content, fontWeight, opacity) {
        const div = document.createElement('div');
        if (fontWeight == 600) {
            fontWeight = 400;
            div.style.fontWeight = fontWeight;
            div.style.opacity = opacity;
        } else if(fontWeight == 500){
            fontWeight = 300;
            div.style.fontWeight = fontWeight;
            div.style.opacity = opacity;
        }else if (fontWeight !== undefined) {
            div.style.fontWeight = fontWeight;  
            div.style.opacity = opacity;
        }
        div.textContent = content;

        container.appendChild(div);
    }

});
    
const widget = () => {
const reocurring = rule.all().map(function(date){
    return {
        title: "Meeting",
        start: date,
    };
});

    const createCalendar = (calendarEl) => {
        return new Calendar(calendarEl, {
            plugins: [rrulePlugin, dayGridPlugin],
            events: [
                {
                    rrule: {
                        freq: RRule.WEEKLY,
                        dtstart: startDate,
                        interval: 2,
                        wkst: RRule.WE,
                        byweekday: RRule.WE,
                        until: endDate,
                    },
                    display: "background",
                    backgroundColor: "#0f2f6a",
                }
            ],
            headerToolbar:{
                left: "",
                center: "",
                right: "",
            },
            dayHeaderFormat: {weekday: "narrow"},
            viewDidMount: function (arg) {
                const meetingTitles = document.querySelectorAll('#title');
                meetingTitles.forEach(meetingTitle => {
                  meetingTitle.textContent = arg.view.title;
                });
              },
            height: "auto",
            // initialDate: "2023-12-23",
        });
    };


    const calendarElements = document.querySelectorAll('#calender');
    calendarElements.forEach(calendarElement => {
      const currentCalendarEl = calendarElement;
      const calendar = createCalendar(currentCalendarEl);
      calendar.render();
    });

};

export default widget;