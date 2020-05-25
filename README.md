# props-vs-state
###### Refactoring in your React.js application


A common pattern is to create several stateless components that just render data, and have a stateful component above them in the hierarchy that passes its state to its children via props. 

The stateful component encapsulates all of the interaction logic, while the stateless components take care of rendering data in a declarative way.

### Should this Component have _state_? 

_state_ is optional. Since _state_ increases complexity and reduces predictability, a Component without _state_ is preferable. Even though you clearly can't do without state in an interactive app, you should avoid having too many _Stateful Components._

#### Component types

* **Stateless Component** — Only _props_, no _state._ There's not much going on besides the `render()` function and all their logic revolves around the _props_ they receive. This makes them very easy to follow (and test for that matter). 

* **Stateful Component** — Both _props_ and _state._ We also call these _state managers_. They are in charge of client-server communication (XHR, web sockets, etc.), processing data and responding to user events. These sort of logistics should be encapsulated in a moderate number of _Stateful Components_, while all visualization and formatting logic should move downstream into as many _Stateless Components_ as possible.


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

[props vs state](https://github.com/uberVU/react-guide/blob/master/props-vs-state.md)


---------------------------------------


### Однонаправленный поток данных

В иерархии компонентов, ни родительский, ни дочерние компоненты не знают, задано ли состояние другого компонента. 

Также не важно, как был создан определённый компонент — с помощью функции или класса.

Состояние часто называют «локальным», «внутренним» или инкапсулированным. 

Оно доступно только для самого компонента и скрыто от других.

Компонент может передать своё состояние вниз по дереву в виде пропсов дочерних компонентов:

``` 
<h2>Сейчас {this.state.date.toLocaleTimeString()}.</h2>
```

Своё состояние можно передать и другому пользовательскому компоненту:

```
<FormattedDate date={this.state.date} />
```

Компонент FormattedDate получает date через пропсы, но он не знает, откуда они взялись изначально — из состояния Clock, пропсов Clock или просто JavaScript-выражения:

```
function FormattedDate(props) {
  return <h2>Сейчас {props.date.toLocaleTimeString()}.</h2>;
}
```


Этот процесс называется «нисходящим» («top-down») или «однонаправленным» («unidirectional») потоком данных. 

Состояние всегда принадлежит определённому компоненту, а любые производные этого состояния могут влиять только на компоненты, находящиеся «ниже» в дереве компонентов.

Если представить иерархию компонентов как водопад пропсов, то состояние каждого компонента похоже на дополнительный источник, который сливается с водопадом в произвольной точке, но также течёт вниз.


---------------------------------------

# Implementing a login form 

[link](https://medium.com/@leandroercoli/react-refactoring-from-class-to-function-components-and-hooks-74f176ea77d6)


---------------------------------------

# [Indie Nation](https://www.youtube.com/channel/UCS34YVeqtFViWRB3jc3o2FQ)


[Full Colour - Times Change](https://youtu.be/9YRfJj0muDo?t=55)

[Max Leone - The Beach](https://youtu.be/7fS8SslvPLk?t=19)

[ufo ufo - Strange Clouds](https://youtu.be/E0V2HjXObes?t=63)

[Cannon - CONVERSATIONS](https://youtu.be/dLhmRczPPdQ?t=41)
