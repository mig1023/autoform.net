class Input extends React.Component {
    render() {
        return (<p>
            <label>{this.props.label} : </label>
            <input type="text" />
        </p>)
    }
}

class Checkbox extends React.Component {
    render() {
        return (<p>
            <input id={this.props.id} type="checkbox" />
            <label for={this.props.name}>{this.props.label}</label>
        </p>)
    }
}

class Fields extends React.Component {
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
    getField(element) {
        if (element.type == "input")
            return (<Input label={element.label} />);

        else if (element.type == "checkbox")
            return (<Checkbox id={element.name} name={element.name} label={element.label} />);
    }
    render() {
        const { error, loaded, items } = this.state;

        if (error)
            return <div>Ошибка загрузки: {error.message}</div>;

        else if (!loaded)
            return <div>Загрузка...</div>;

        else {
            return (
                <div>
                    {items.map((page, p) => {
                        return (
                            page.elements.map((el, i) => this.getField(el))
                        );
                    } ) }
                </div>
            );
        }
    }
}

ReactDOM.render(
    <Fields/>,
    document.getElementById("content")
);