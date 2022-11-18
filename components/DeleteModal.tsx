import { TrashIcon } from "@heroicons/react/24/solid"
import axios from "axios"
import React from "react"
import { toast } from "react-hot-toast"

const DeleteModal = (props: any) => {
  const deletePost = (id: string) => {
    axios.delete(`http://localhost:3000/api/posts/delete/${id}`).then(() => {
      toast.success("post deleted successfully")
    })
  }
  return (
    <div>
      {/* The button to open modal */}
      <label htmlFor="my-modal" className=" btn-secondary">
        <TrashIcon
          className="text-red-400 h-6 w-6"
          onClick={(e) => {
            e.preventDefault()
            deletePost(props.id)
          }}
        />
      </label>

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg text-center">
            Do you really want to delete this post ?
          </h3>
          <div className="modal-action flex justify-center">
            <label
              className="btn btn-error"
              htmlFor="my-modal"
              onClick={(e: any) => {
                deletePost(props.id)
              }}
            >
              Delete
            </label>
            <label className="btn btn-secondary" htmlFor="my-modal">
              Cancel
            </label>
            {/* <label htmlFor="my-modal" className="btn ">
              Yay!
            </label> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default DeleteModal
