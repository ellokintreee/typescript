/*en typescript ademas de los tipos de datos que hay en javacript
que son: nunber 
boolean
string
null 
undefined
object 
function
en ts tenemos
any que ese no tenemos que usarlo
unknown
never arrays
tuplas
enums
tambien tiene datos que son los inferidos */
/*en ts, podemos separar miles de millones con guion bajo ejem 76_000_000 
para crear una variable que sea de algun tipo, se debe declarar de la siguiente manera.
let extincionDeDinosaurios: number = 76_000_000
let dinosaurio: string = "t-rex"
ts es inteligente, tanto como para, entender que tipo de dato continen una variable, aunque no se lo declaremos*/
/*para declarar un arreglo se debe decir arrelgo de que va a ser: es decir, si es de numeros o es de string
de la siguiente manera let arreglo:number[] aca le declaramos que el siguiente arrglo va a ser de numero, luego le agregamos el arreglo de la manera normal
lo mismo para el arreglo de string let arreglos:string[]*/
/*ts es capas de darte las metodos para el dato que estes utilizando, ya sea string, number, etc*/
/*las tuplas, son arrays en los cuales, esta puede tener tanto un dato como otro ocomo se conoce el operador
OR a su ves, tambien se puede designar que la tupla contenga un arreglo dentro de ella
let tupla: [number, string[]] */
/*los tipos enum son aquellos que se parecen a la desusctructuracion, es decir podemos colocar solo el enum para aconglomerar varios datos.
enum la primer palabra del lo que escribamos tiene que ser en mayuscula ejem Talla 
se crea la variable del siguiente modo:
enum Talla {Chica ="s",Mediana = "m"} o enum Decimal {inicio =2 ,intermedio(va a ser el numero siguient si no le damos esa indicacion, el indice es como el de un array)}
para llamar a un solo valor, lo declaramos en unva variable, const o let de la sguiente manera.
const variable = Talla.Grande
usualmente se utilisa el enum, para determinar estados de la carga del html, para ello la guardamos en una const
ejem: const enum loadingState {Idle, Loading, Sucess, Error}
y despues devemos llamarla, para que esta sea visible
const estado = LoadingState.Succes daria un 2 por la posicion en su indice */