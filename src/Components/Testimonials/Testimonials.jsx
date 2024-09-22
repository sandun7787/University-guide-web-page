import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'

const Testimonials = () => {

  const slider = useRef();
  let tx = 0; // Track translation percentage

  const slideForward = () => {
    if (tx > -50) {  // Ensure we don't slide past the last item
      tx -= 25;  // Move the slider left by 25%
    }
    slider.current.style.transform = `translateX(${tx}%)`;  // Use backticks for template literal
  }

  const slideBackward = () => {
    if (tx < 0) {  // Ensure we don't slide before the first item
      tx += 25;  // Move the slider right by 25%
    }
    slider.current.style.transform = `translateX(${tx}%)`;  // Use backticks for template literal
  }

  return (
    <div className='test'>
      <img src={next_icon} alt="" className='next-btn' onClick={slideForward} />
      <img src={back_icon} alt="" className='back-btn' onClick={slideBackward} />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="" />
                <div>
                  <h3>William Jacksons</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>UoM is renowned for its rigorous programs, especially in engineering, architecture, and IT. Students often face a heavy workload, with frequent assignments, labs, projects, and exams.</p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt="" />
                <div>
                  <h3>William Jacksons</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>UoM is renowned for its rigorous programs, especially in engineering, architecture, and IT. Students often face a heavy workload, with frequent assignments, labs, projects, and exams.</p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_3} alt="" />
                <div>
                  <h3>William Jacksons</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>UoM is renowned for its rigorous programs, especially in engineering, architecture, and IT. Students often face a heavy workload, with frequent assignments, labs, projects, and exams.</p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt="" />
                <div>
                  <h3>William Jacksons</h3>
                  <span>Edusity, USA</span>
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

export default Testimonials;
