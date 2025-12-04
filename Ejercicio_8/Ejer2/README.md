1. ¿Por qué separar AuthContext y TasksContext?
Separarlos evita que cambios en uno provoquen re-renders innecesarios en consumidores del otro. Si usas un GlobalContext con { currentUser, tasks, dispatch }, cualquier dispatch que cambie tasks hará que todos los componentes que consumen el contexto (incluido UserInfo) se re-rendericen aunque currentUser no haya cambiado. Separando contexts, UserInfo solo se subscribe a AuthContext y no se re-renderizará cuando cambien las tareas, reduciendo updates innecesarios.

2. Por qué se re-renderizan TaskItem al cambiar de usuario y cómo arreglarlo:
Cadena de eventos típica: al cambiar el user en AuthContext se crea un nuevo objeto user (nueva referencia). Todos los consumidores de AuthContext se re-renderizan: si TaskItem consume AuthContext para decidir canEdit, cada TaskItem recalcula y renderiza. Solución: minimizar consumo de AuthContext dentro de cada TaskItem. Opciones:

Hacer que TaskItem reciba solo la prop currentUserName (primitiva) — y evitar pasar objetos recreados — o

Mantener TaskItem memoizado con React.memo y usar comparación personalizada (por ejemplo, comparar task y currentUserName).
En muchas ocasiones no basta envolver en memo: hay que asegurarse de que las props que pasan a TaskItem no sean recreadas (evitar funciones inline u objetos). También se puede extraer canEdit en el padre y pasar canEdit como booleano (primitiva), que es más estable y fácil de comparar.