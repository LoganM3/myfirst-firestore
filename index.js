import { initializeApp, cert } from 'firebase-admin/app'
import { getFirestore } from 'firebase-admin/firestore'
import { credentials } from './credentials.js'

initializeApp({
    credential: cert(credentials)
})

const db = getFirestore()

const car = {
    make: 'jeep', model: 'wrangler', year: 1997, color: 'green'
}

db.collection('cars').add(car)
