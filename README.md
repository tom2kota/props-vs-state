# props-vs-state
###### How to avoid refactoring in your first React.js application


#### Changing _props_ and _state_

| | _props_ | _state_ | 
--- | --- | --- 
Can get initial value from parent Component? | Yes | Yes
Can be changed by parent Component? | Yes | No
Can set default values inside Component?* | Yes | Yes
Can change inside Component? | No | Yes
Can set initial value for child Components? | Yes | Yes
Can change in child Components? | Yes | No

\* Note that both _props_ and _state_ initial values received from parents override default values defined inside a Component.



#### Изменение _props_ и _state_

| | _props_ | _state_ |
--- | --- | ---
Может ли получить начальное значение от родительского компонента? | Да | Да
Может быть изменен родительским компонентом? | Да | Нет
Можно ли установить значения по умолчанию внутри компонента? * | Да | Да
Может измениться внутри Компонента? | Нет | Да
Можно установить начальное значение для дочерних компонентов? | Да | Да
Может измениться в дочерних компонентах? | Да | Нет

\ * Обратите внимание, что исходные значения _props_ и _state_, полученные от родителей, имеют приоритет над значениями по умолчанию, определенными внутри компонента.



[How to avoid refactoring in your first React.js application](https://andrejgajdos.com/how-to-avoid-refactoring-in-your-first-react-application/)


[props vs state](https://github.com/uberVU/react-guide/blob/master/props-vs-state.md)


[Full Colour - Times Change](https://youtu.be/9YRfJj0muDo?t=55)
