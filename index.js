import { initializeApp, cert } from 'firebase-admin/app'
import { getFirestore } from 'firebase-admin/firestore'
import { credentials } from './credentials.js'

initializeApp({
    credential: cert(credentials)
})

const db = getFirestore()

// const car = {
//     make: 'Ferrari', model: 'GTO', year: 2008, color: 'red'
// }

// db.collection('cars').add(car)
// .then(doc => {
//     console.log('Doc added:', doc.id)
// })
// .catch(err => console.error(err))


// db.collection('cars').doc('lambo')
// .set({ make: 'Lamborghini', model: 'Diablo', year: 2020, color: 'yellow' })

// db.collection('cars').doc('lambo')
// .update({miles: 100, color: 'hot pink'})

// //get a single document:
// db.collection('cars').doc('lambo').get()
// .then(doc => {
//     console.log(doc.id)
//     console.log(doc.data())
// })
// .catch(console.error)

// //Get a whole collection: 
// db.collection('cars').get()
//     .then(collection => {
//         collection.docs.forEach(doc => console.log(doc.id, doc.data()))
//     })
//     .catch(console.error)

    //Query docs from collection:
    db.collection('cars')
    .where('year', '>=', 2000)
    .get()
        .then(collection => {
           const cars = collection.docs.map(doc => {
            let car = doc.data()
            car.id = doc.id
            return car
        })
        //const casrs2 = collection.docs.map(doc =>{
        //  return { ...doc.data(), id: doc.id}
       // })
           console.log(cars)
        })
        .catch(console.error)