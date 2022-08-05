const root = document.getElementById("root")

// const h1Dom = React.createElement(
//     'h1',
//     {
//         title: 'Hello',
//         className: 'heading',
//     },
//     'Hello Guys!'
//     )

// const ulDom = React.createElement(
//     'ul',
//     {},
//     React.createElement('li',{},'Javascript'),
//     React.createElement('li',{},'ReactJs')
//     )

//     ReactDOM.render(h1Dom,root)
//     ReactDOM.render(ulDom,root)
//     ReactDOM.render((h1Dom,ulDom),root)

    const rootDom = React.createElement(
        'div',
        {},
        React.createElement(
            'h1',
            {
                title: 'Hello',
                className: 'heading',
            },
            'Hello Guys!'
            ),
        React.createElement(
            'ul',
            {},
            React.createElement('li',{},'Javascript'),
            React.createElement('li',{},'ReactJs')
            ),
        )
// câu lệnh reactDoom render(phần tử render, nơi render)
    ReactDOM.render(rootDom,root)