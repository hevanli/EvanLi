import React from 'react'
import { 
  VerticalTimeline, 
  VerticalTimelineElement, 
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaSchool } from 'react-icons/fa'
import '../styles/Experience.css'

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement 
          className='vertical-timeline-element--education' 
          date="2020-now"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<FaSchool/>}
        >
          <h3 className='vertical-timeline-element-title'>
            Tpumps Boba
          </h3>
          <p>First job</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement 
          className='vertical-timeline-element--education' 
          date="2020-2024"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<FaSchool/>}
        >
          <h3 className='vertical-timeline-element-title'>
            Aragon High School, San Mateo, California
          </h3>
          <p>High School Diploma</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
      
    </div>
  )
}

export default Experience