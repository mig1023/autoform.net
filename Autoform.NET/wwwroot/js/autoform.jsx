class Component extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            loaded: false,
            items: []
        };
    }
    componentDidMount() {
        fetch("/data")
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    loaded: true,
                    items: result
                });
            },
            (error) => {
                this.setState({
                    loaded: true,
                    error
                });
            }
        )
    }
    render() {
        const { error, loaded, items } = this.state;

        if (error)
            return <div>Ошибка: {error.message}</div>;
        else if (!loaded)
            return <div>Загрузка...</div>;
        else {
            return (
                <div>
                    {items.map((page, p) => {
                        return (
                            page.elements.map((el, i) => GetElement(el))
                        );
                    } ) }
                </div>
            );
        }
    }
}

function GetElement(element) {
    if (element.type == "input")
        return (<p>
            <label>{element.label} : </label>
            <input type="text" />
        </p>);
    else if (element.type == "checkbox")
        return (<p>
            <input id="{element.name}" type="checkbox" />
            <label for="{element.name}">{element.label}</label>
        </p>);
}

ReactDOM.render(
    <Component/>,
    document.getElementById("content")
);