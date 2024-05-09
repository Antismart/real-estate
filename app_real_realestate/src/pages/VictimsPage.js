import React from 'react'

function VictimsPage() {
  return (
    <>
     <form style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '10%', marginLeft: '15%', backgroundColor: '#f0f0f8', width: '70%', borderRadius: '8px'}} >
        <p style={{fontSize: '32px', fontWeight: 'bold'}}>Victims Form</p>
        <label>Name</label>
        <input style={{border: 'solid 1px'}}/>
        <label>No. of People</label>
        <input style={{border: 'solid 1px'}} />
        <label>Phone Number</label>
        <input style={{border: 'solid 1px'}}/>
        <label>ID No.</label>
        <input style={{border: 'solid 1px'}}/>
        <label>Time Allocated</label>
        <div style={{display: 'flex', gap: '20px'}}>
        </div> <br />
        <button type='submit' style={{border:'solid 1px gray', color: 'white', backgroundColor: 'green', padding: '8px', borderRadius: '8px' }}>Submit</button>
      </form>
    </>
  )
}

export default VictimsPage