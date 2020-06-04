# props-vs-state

## Login Form

### Code Refactoring in React App

![React_App_Deploy_to_gh-pages_CI](https://github.com/tom2kota/props-vs-state/workflows/React_App_Deploy_to_gh-pages_CI/badge.svg)


[DEMO](https://tom2kota.github.io/props-vs-state/)

-------------------

### YARN

```
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
sudo apt update && sudo apt install yarn
export PATH="$PATH:/opt/yarn-[version]/bin"
export PATH="$PATH:`yarn global bin`"
yarn --version
curl --compressed -o- -L https://yarnpkg.com/install.sh | bash
yarn upgrade
```

###### [Node.js Release Working Group](https://github.com/nodejs/Release#nodejs-release-working-group)

Using a Node.js [version management package](https://github.com/nvm-sh/nvm)

``` 
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash

export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm

command -v nvm

nvm

nvm install 10
nvm alias default 10
```

in a terminal to see if ```n``` is installed on your system. If it’s installed, 
you can run ```n 10``` to install and use Node.js version 10.

### PROJECT - Gatsby's default starter

``` 
npm run develop
```

[http://localhost:8000/]( http://localhost:8000/)

[http://localhost:8000/___graphql](http://localhost:8000/___graphql)


--------------------------------------------------------
#   STATE & PROPS

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


### [Однонаправленный поток данных](https://ru.reactjs.org/docs/state-and-lifecycle.html)

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

#### [ Data Handling in React ](https://towardsdatascience.com/passing-data-between-react-components-parent-children-siblings-a64f89e24ecf)

 - From Parent to Child using Props

 - From Child to Parent using Callbacks
 
 - Between Siblings:
 
    * Combine above two methods (From Parent to Child using Props || From Child to Parent using Callbacks)
    
    * Using Redux
    
    * Using React’s Context API


---------------------------------------

##### Between Siblings

![Method 1: Combine the above two methods of sharing data](/src/images/callback.gif)


![Method 2: Use a global store maintaining the states of all child components which are needed to interact and consume the data required from the store — Redux](/src/images/redux.gif)


![Method 3: Use React’s Context API](/src/images/context.png)

---------------------------------------

# Implementing a login form 

[link](https://medium.com/@leandroercoli/react-refactoring-from-class-to-function-components-and-hooks-74f176ea77d6)

# Implementing LoginState Form

##### STEPS:

1). To manage the logic behind our form, we could save our input values in the component’s state, and call an appropriate method when the onChange event gets triggered, updating our stateful values:

```
    state = {
        username: "",
        password: ""
    }

    handleChangeUsername = (event) => {
        this.setState({username: event.target.value})
    }

    handleChangePassword = (event) => {
        this.setState({password: event.target.value})
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(`FORM SUBMITTED WITH: 
                     ${this.state.username}, 
                     ${this.state.password}`)
    }
```

2). Finally, when the form gets submitted, we would have to call a handleSubmit method that performs all the necessary logic to log the user (e.g. an API call to check if the user exists). The complete class component would then be:

``` 
import React, {Component} from "react";
import './LoginState.css';

class LoginState extends Component {

    state = {
        username: "",
        password: ""
    }

    handleChangeUsername = (event) => {
        this.setState({username: event.target.value})
    }

    handleChangePassword = (event) => {
        this.setState({password: event.target.value})
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(`FORM SUBMITTED WITH: 
                     ${this.state.username} 
                     ${this.state.password}`)
    }

    render() {
        console.log('LOGIN STATE: ', this.state)

        return (
            <form onSubmit={this.handleSubmit}>
                <h1>LoginState</h1>
                <div>
                    <div>
                        <input onChange={this.handleChangeUsername} value={this.state.username}
                               name="email"
                               type="email"
                               placeholder="email"
                        />
                    </div>
                    <div>
                        <input onChange={this.handleChangePassword} value={this.state.password}
                               name="password"
                               type="password"
                               placeholder="password"
                        />
                    </div>
                </div>

                <button type="submit">
                    LoginState
                </button>
            </form>
        );
    }
}

export default LoginState

```

3). Refactoring into a stateless function.
   
   To restructure a class component into a function component we should consider that a plain JavaScript function component is stateless, intended to keep the focus on the presentation and improve reusability through a modular approach. This means that we have to maintain our state in a parent component and pass it down to our function components as props.
   
   To illustrate this in our form component lets encapsulate the presentation elements, returned by the render method, inside a separate function component that receives the username and password as props.
   
``` 
import React from "react";

const LoginPropsOne = (props) => (
    <form onSubmit={props.handleSubmit}>
        <h1>LoginState</h1>
        <div>
            <div>
                <input onChange={(event) => props.setUsername(event.target.value)} value={props.username}
                       name="email"
                       type="email"
                       placeholder="email"
                       required
                />
            </div>
            <div>
                <input onChange={(event) => props.setPassword(event.target.value)} value={props.password}
                       name="password"
                       type="password"
                       placeholder="password"
                       required
                />
            </div>
        </div>

        <button type="submit">
            LoginState
        </button>
    </form>
)

export default LoginPropsOne
```

4). ES6 tip: use destructuring on props to clean the code and improve readability

``` 
import React from "react";

const LoginPropsTwo = (props) => {

    const {username, password, onSubmit, setUsername, setPassword} = props;

    return (
        <form onSubmit={onSubmit}>
            <h1>LoginState</h1>
            <div>
                <div>
                    <input onChange={(event) => setUsername(event.target.value)} value={username}
                           name="email"
                           type="email"
                           placeholder="email"
                           required
                    />
                </div>
                <div>
                    <input onChange={(event) => setPassword(event.target.value)} value={password}
                           name="password"
                           type="password"
                           placeholder="password"
                           required
                    />
                </div>
            </div>

            <button type="submit">
                LoginState
            </button>
        </form>
    )
}

export default LoginPropsTwo
```

5). Semantic UI

[LoginLayout](https://github.com/Semantic-Org/Semantic-UI-React/blob/master/docs/src/layouts/LoginLayout.js)

[FormSubmit](https://react.semantic-ui.com/collections/form/#usage-clear-on-submit)


``` 

```

6). Hooks

``` 

```

### P.S.

[5 Ways to Convert React Class Components to Functional Components with React Hooks](https://www.digitalocean.com/community/tutorials/five-ways-to-convert-react-class-components-to-functional-components-with-react-hooks)


[Colorful console.log](https://coderwall.com/p/fskzdw/colorful-console-log)



---------------------------------------

# [Indie Nation](https://www.youtube.com/channel/UCS34YVeqtFViWRB3jc3o2FQ)


[Full Colour - Times Change](https://youtu.be/9YRfJj0muDo?t=55)

[Max Leone - The Beach](https://youtu.be/7fS8SslvPLk?t=19)

[ufo ufo - Strange Clouds](https://youtu.be/E0V2HjXObes?t=63)

[Cannon - CONVERSATIONS](https://youtu.be/dLhmRczPPdQ?t=41)
