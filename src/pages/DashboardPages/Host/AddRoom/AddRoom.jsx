import { useState } from "react";
import AddRoomForm from "../../../../components/Form/AddRoomform";
import useAuth from "../../../../hooks/useAuth";
import { imageUpload } from "../../../../api/utils";
import { Helmet } from "react-helmet-async";
import { useMutation } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AddRoom = () => {
  const navigate = useNavigate()
  const axiosSecure = useAxiosSecure()
    const {user} = useAuth()
    const [imagePreview,setImagePreview] = useState()
    const [imagetext,setImagetext] = useState('upload image')
    const [loading,setLoading] = useState(false)

    const [dates, setDates] = useState(
    {
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
    }
);

// function for calender
const handleDates = (item) => {
    // console.log(item);
    setDates(item.selection)
}


// function for posting data into database 
const {mutateAsync} = useMutation({
  mutationFn : async (roomData) => {
    const {data} = await axiosSecure.post('/room', roomData)
    return data
  },
  onSuccess : () => {
    // console.log('data saved successfully');
    toast.success("Rooms added successfully")
    setLoading(false)
    navigate('/dashboard/my-listings')
  }
})

// main function for submitting the form

const handleAddRoom = async(e) => {
    e.preventDefault()
    setLoading(true)
    const form = e.target

    const degree = form.location.value // degree is location
    const category = form.category.value
    const title = form.title.value
    const to = dates.endDate
    const from = dates.startDate
    const price = form.price.value
    const experience = form.total_guest.value  // experience is total_guest
    const description = form.description.value
  
    const image = form.image.files[0]

    const host = {
        name: user?.displayName,
        image : user?.photoURL,
        email : user?.email
    }

   try {
    const image_url = await imageUpload(image)

    const roomData = {
        location,category,title,from,to,price,experience,degree,description,host, image:image_url
        
    }
    console.table(roomData)

    // save these data into database
    mutateAsync(roomData)
   }

   catch (error){
    // console.log(error);
    toast.error("There is some error adding room")
    setLoading(false)
   }

}


// function for image preview
const handleImage = (image) => {
    setImagePreview(URL.createObjectURL(image))
    setImagetext(image.name)
}


  return (
    <div>

    <Helmet>
      <title>Dashboard | Add Doctor</title>
    </Helmet>
      
      <AddRoomForm handleDates={handleDates} dates={dates} handleAddRoom={handleAddRoom} setImagePreview={setImagePreview} imagePreview={imagePreview} handleImage={handleImage} imagetext={imagetext} loading={loading}></AddRoomForm>

    </div>
  );
};

export default AddRoom;
