import { db } from "./inicio";
import { collection, addDoc, getDocs,deleteDoc,doc , query , where} from "firebase/firestore";
import { async } from "@firebase/util";

export function getAll(idUser) {
  return new Promise(async (resolve,reject) => {
    let res = [];
    try {
      const cartas = await getDocs(collection(db, "cards"));
      cartas.forEach((doc) => {
        let carta = doc.data();
        if (carta.user == idUser) {
          res = [...res,{id: carta.id , rarity: carta.rarity}]
        }
      });
      resolve(res);
    } catch (error) {
      reject(error);
    }
  })  
}
export function getRarity(idUser,idCard) {
  return new Promise(async (resolve,reject) => {
    let res = [];
    try {
      const cartas = await getDocs(collection(db, "cards"));
      cartas.forEach((doc) => {
        let carta = doc.data();
        if (carta.user = idUser && carta.id == idCard) {
          res = [...res, carta.rarity ]
        }
      });
      resolve(res);
    } catch (error) {
      reject(error);
    }
  })  
}

export async function newCharacter(params) {
  try {
    console.log(params)
    const res = await addDoc(collection(db, "cards"),{
      id: params.id,
      user: params.user,
      rarity: params.rarity
    })
  } catch (error) {
    console.log(error);
  }
}

export async function borrarCharacter(param) {  
  console.log("borrando" + param);
  const cartas = collection(db, "cards");
  const q = query(cartas, where("id", "==", param));
  try {
    const querySnapshot = await getDocs(q);
    console.log(querySnapshot);
    try {
      querySnapshot.forEach(async (docSnapshot) => {
        await deleteDoc(docSnapshot.ref).catch((error) => {
          console.log(error);
        });
      });
    } catch (error) {
      console.log(error);    
    }
  } catch (error) {
    console.log(error);
  }
}


export async function add(params) {
  try {
    const docRef = await addDoc(collection(db, "usuarios"), {
      nombre: "Ada",
      contraseña: "Lovelace",
    });
    console.log("hola we");
    console.log(db);
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }

  /*db.collection("usuarios").add({
        nombre: "Ada",
        contraseña: "Lovelace"
    })
    .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch((error) => {
        console.error("Error adding document: ", error);
    });*/
}

export function sesion(datos) {
  return new Promise(async (resolve, reject) => {
    const res = {
      estado: false,
      id: "",
    };
    try {
      const querySnapshot = await getDocs(collection(db, "usuarios"));
      let userExists = false;
      querySnapshot.forEach((doc) => {
        let user = doc.data();
        if (
          datos.password === user.contraseña &&
          datos.username === user.nombre
        ) {
          userExists = true;
          res.estado = true;
          res.id = doc.id;
        }
      });
      resolve(res);
    } catch (error) {
      reject(error);
    }
  });
}
