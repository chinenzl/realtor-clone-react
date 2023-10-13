import { doc, getDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { db } from "../firebase";


export default function Listing() {
    const params = useParams()
    const [listing,setListings] = useState(null)
    const [loading,setLoading] = useState(true)
    useEffect(()=>{
        async function fetchListing(){
            const docRef = doc(db,"listing", params.listingId)
            const docSnap = await  getDoc(docRef)
            if(docSnap.exists){
                setListings(docSnap.data())
                setLoading(false)
            }
        }
        fetchListing();
        // console.log(listing);
    },[params.listingId,listing])
  return (
    <div>Listing</div>
  )
}
