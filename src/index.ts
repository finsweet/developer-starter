import { greetUser } from '$utils/greet';
import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';

window.Webflow ||= [];
window.Webflow.push(() => {
  console.log("poop");
  const calendarElement = document.querySelector<HTMLDivElement>("[data-element='calendar']");
  if (!calendarElement) return;
  const events = getEvents();
  console.log({ events })
  console.log({ calendarElement });
  const calendar = new Calendar(calendarElement, {
    plugins: [dayGridPlugin, timeGridPlugin, listPlugin],
    initialView: 'dayGridMonth',
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek'
    }
  });
  calendar.render();
});
const getEvents = () => {
  const scripts = document.querySelectorAll<HTMLScriptElement>("[data-element='event-data']");
  console.log({ scripts });
  const events = [...scripts].map((script) => JSON.parse(script.textContent || '{}'));
  return events;
}
