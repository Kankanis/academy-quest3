// app/javascript/controllers/quest_editor_controller.js
import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["display", "editForm", "nameField"]

  connect() {
    console.log("Quest editor controller CONNECTED!", this.element.id)
    this.showDisplay()
  }

  disconnect() {
    console.log("Quest editor controller DISCONNECTED!", this.element.id)
  }

  edit() {
    console.log("Entering edit mode for:", this.element.id)
    this.showEditForm()
  }

  submitForm(event) {
    event.preventDefault() // <-- สำคัญมาก! ป้องกันการ submit ปกติของฟอร์ม
    console.log("Submit event caught by Stimulus for:", this.element.id)
    console.log("editFormTarget:", this.editFormTarget) // ควรเป็น HTMLFormElement

    if (this.editFormTarget) {
      console.log("Calling requestSubmit() on editFormTarget...")
      this.editFormTarget.requestSubmit()
      console.log("requestSubmit() called.")
    } else {
      console.error("Error: editFormTarget is not found or is undefined!")
    }
  }

  cancel() {
    console.log("Exiting edit mode (cancelled) for:", this.element.id)
    this.showDisplay()
  }

  // Helper Methods
  showDisplay() {
    this.displayTarget.classList.remove("hidden")
    this.editFormTarget.classList.add("hidden")
  }

  showEditForm() {
    this.displayTarget.classList.add("hidden")
    this.editFormTarget.classList.remove("hidden")
    // ตรวจสอบให้แน่ใจว่า nameFieldTarget พร้อมใช้งานก่อน focus
    if (this.nameFieldTarget) {
      this.nameFieldTarget.focus() 
    } else {
      console.warn("nameFieldTarget not found, cannot focus.")
    }
  }
}