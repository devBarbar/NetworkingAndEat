import React from "react"
import { Link } from "gatsby"

import "../components/util.css"
import "../components/main.css"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <div
    className="bg-img1 size1 flex-w flex-c-m p-t-55 p-b-55 p-l-15 p-r-15"
    style={{ backgroundImage: 'url("images/bg01.jpg")' }}
  >
    <div className="wsize1 bor1 bg1 p-t-175 p-b-45 p-l-15 p-r-15 respon1">
      <div className="wrappic1">
        <img src="images/icons/logo.png" alt="Networking and Eat" />
      </div>
      <p className="txt-center m1-txt1 p-t-33 p-b-68">
        Our website is under construction
      </p>
      <div className="wsize2 flex-w flex-c hsize1 cd100">
        <div className="flex-col-c-m size2 how-countdown">
          <span className="l1-txt1 p-b-9 days">35</span>
          <span className="s1-txt1">Days</span>
        </div>
        <div className="flex-col-c-m size2 how-countdown">
          <span className="l1-txt1 p-b-9 hours">17</span>
          <span className="s1-txt1">Hours</span>
        </div>
        <div className="flex-col-c-m size2 how-countdown">
          <span className="l1-txt1 p-b-9 minutes">50</span>
          <span className="s1-txt1">Minutes</span>
        </div>
        <div className="flex-col-c-m size2 how-countdown">
          <span className="l1-txt1 p-b-9 seconds">39</span>
          <span className="s1-txt1">Seconds</span>
        </div>
      </div>
      <form className="flex-w flex-c-m contact100-form validate-form p-t-55">
        <div
          className="wrap-input100 validate-input where1"
          data-validate="Email is required: ex@abc.xyz"
        >
          <input
            className="s1-txt2 placeholder0 input100"
            type="text"
            name="email"
            placeholder="Your Email"
          />
          <span className="focus-input100" />
        </div>
        <button className="flex-c-m s1-txt3 size3 how-btn trans-04 where1">
          Get Notified
        </button>
      </form>
      <p className="s1-txt4 txt-center p-t-10">
        I promise to <span className="bor2">never</span> spam
      </p>
    </div>
  </div>
)

export default IndexPage
