import React from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'


const test = () => {
  return (
    <div className='test'>
      <img src={next_icon} alt="" className='next-btn' />
      <img src={back_icon} alt="" className='back-btn' /> 
      <div className="slider">
        <ul>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="" />
                <div>
                  <h3>William Jacksons</h3>
                  <span>Edusity,USA</span>
                </div>
              </div>
              <p>UoM is renowned for its rigorous programs, especially in engineering, architecture, and IT. Students often face a heavy workload, with frequent assignments, labs, projects, and exams.</p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="" />
                <div>
                  <h3>William Jacksons</h3>
                  <span>Edusity,USA</span>
                </div>
              </div>
              <p>UoM is renowned for its rigorous programs, especially in engineering, architecture, and IT. Students often face a heavy workload, with frequent assignments, labs, projects, and exams.</p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="" />
                <div>
                  <h3>William Jacksons</h3>
                  <span>Edusity,USA</span>
                </div>
              </div>
              <p>UoM is renowned for its rigorous programs, especially in engineering, architecture, and IT. Students often face a heavy workload, with frequent assignments, labs, projects, and exams.</p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="" />
                <div>
                  <h3>William Jacksons</h3>
                  <span>Edusity,USA</span>
                </div>
              </div>
              <p>UoM is renowned for its rigorous programs, especially in engineering, architecture, and IT. Students often face a heavy workload, with frequent assignments, labs, projects, and exams.</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default test
