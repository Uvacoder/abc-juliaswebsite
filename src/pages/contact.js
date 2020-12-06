import React, { useState } from "react"
import Head from "../components/head"
import Layout from "../components/layout"

import formStyle from "./contact.module.css"

const ContactPage = () => {
  const [status, setStatus] = useState("")

  const submitForm = ev => {
    ev.preventDefault()
    const form = ev.target
    const data = new FormData(form)
    const xhr = new XMLHttpRequest()
    xhr.open(form.method, form.action)
    xhr.setRequestHeader("Accept", "application/json")
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return
      if (xhr.status === 200) {
        form.reset()
        setStatus("SUCCESS")
      } else {
        setStatus("ERROR")
      }
    }
    xhr.send(data)
  }
  return (
    <Layout>
      <Head title="Contact" />
      <h1>Contact</h1>

      <form
        onSubmit={submitForm}
        action="https://formspree.io/f/xaylbnyo"
        method="POST"
        className={formStyle.form}
      >
        <label htmlFor="email">Email:</label>
        <input type="email" name="email" placeholder="youremail@website.com" />
        <label htmlFor="message">Message:</label>
        <textarea
          type="text"
          name="message"
          className={formStyle.messageBox}
          placeholder="Inquire here..."
        />
        {status === "SUCCESS" ? (
          <p>Thanks!</p>
        ) : (
          <button className={formStyle.submit}>Submit</button>
        )}
        {status === "ERROR" && <p>Ooops! There was an error.</p>}
      </form>
    </Layout>
  )
}

export default ContactPage
