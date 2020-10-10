class Component extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }
    componentDidMount() {
        fetch("/data")
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    isLoaded: true,
                    items: result.items
                });
            },
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                });
            }
        )
    }
    render() {
        const { error, isLoaded, items } = this.state;

        if (error)
            return <div>Ошибка: {error.message}</div>;
        else if (!isLoaded)
            return <div>Загрузка...</div>;
        else {
            return (
                <div>
                    <p>My name is {this.props.name}, i'm load:</p>
                    <ul>
                        { items.map(item => (
                            <li key={item.name}>{item.name} {item.price}</li>
                        )) }
                    </ul>
                </div>
            );
        }
    }
}

ReactDOM.render(
    <Component name="Autoform"/>,
    document.getElementById("content")
);