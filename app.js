'use strict';

const e = React.createElement;

class formhandle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value1: ['', '', '', ''],
            value2: ['', '', '', ''],
            value3: ['', '', '', ''],
            value4: ['', '', '', ''],
            value5: ['', '', '', ''],
            value6: ['', '', '', ''],
            value7: ['', '', '', ''],
            value8: ['', '', '', ''],
            value9: ['', '', '', ''],
            value10: ['', '', '', ''],
            value11: ['', '', '', ''],
            value12: ['', '', '', ''],
            value13: ['', '', '', ''],
            value14: ['', '', '', ''],
            value15: ['', '', '', ''],
            value16: ['', '', '', ''],
            value17: ['', '', '', ''],
            value18: ['', '', '', ''],
        };
    }

    handleChange = (event) => {
        const inputName = event.target.name;
        const inputValue = event.target.value;
        const inputArrayName = inputName.split('_')[0];
        const inputArrayIndex = Number(inputName.split('_')[1]) - 1;

        if (inputArrayName === 'value1') {
            const value1 = [...this.state.value1];
            value1[inputArrayIndex] = inputValue;
            this.setState({ value1 });
        } else if (inputArrayName === 'value2') {
            const value2 = [...this.state.value2];
            value2[inputArrayIndex] = inputValue;
            this.setState({ value2 });
        } else if (inputArrayName === 'value3') {
            const value3 = [...this.state.value3];
            value3[inputArrayIndex] = inputValue;
            this.setState({ value3 });
        } else if (inputArrayName === 'value4') {
            const value4 = [...this.state.value4];
            value4[inputArrayIndex] = inputValue;
            this.setState({ value4 });
        } else if (inputArrayName === 'value5') {
            const value5 = [...this.state.value5];
            value5[inputArrayIndex] = inputValue;
            this.setState({ value5 });
        } else if (inputArrayName === 'value6') {
            const value6 = [...this.state.value6];
            value6[inputArrayIndex] = inputValue;
            this.setState({ value6 });
        } else if (inputArrayName === 'value7') {
            const value7 = [...this.state.value7];
            value7[inputArrayIndex] = inputValue;
            this.setState({ value7 });
        } else if (inputArrayName === 'value8') {
            const value8 = [...this.state.value8];
            value8[inputArrayIndex] = inputValue;
            this.setState({ value8 });
        } else if (inputArrayName === 'value9') {
            const value9 = [...this.state.value9];
            value9[inputArrayIndex] = inputValue;
            this.setState({ value9 });
        } else if (inputArrayName === 'value10') {
            const value10 = [...this.state.value10];
            value10[inputArrayIndex] = inputValue;
            this.setState({ value10 });
        } else if (inputArrayName === 'value11') {
            const value11 = [...this.state.value11];
            value11[inputArrayIndex] = inputValue;
            this.setState({ value11 });
        } else if (inputArrayName === 'value12') {
            const value12 = [...this.state.value12];
            value12[inputArrayIndex] = inputValue;
            this.setState({ value12 });
        } else if (inputArrayName === 'value13') {
            const value2 = [...this.state.value13];
            value13[inputArrayIndex] = inputValue;
            this.setState({ value13 });
        } else if (inputArrayName === 'value14') {
            const value14 = [...this.state.value14];
            value14[inputArrayIndex] = inputValue;
            this.setState({ value14 });
        } else if (inputArrayName === 'value15') {
            const value15 = [...this.state.value15];
            value15[inputArrayIndex] = inputValue;
            this.setState({ value15 });
        } else if (inputArrayName === 'value16') {
            const value16 = [...this.state.value16];
            value16[inputArrayIndex] = inputValue;
            this.setState({ value16 });
        } else if (inputArrayName === 'value17') {
            const value17 = [...this.state.value17];
            value17[inputArrayIndex] = inputValue;
            this.setState({ value17 });
        } else if (inputArrayName === 'value18') {
            const value18 = [...this.state.value18];
            value18[inputArrayIndex] = inputValue;
            this.setState({ value18 });
        }
    };
    sendData = () => {
        data = { value1, value2, value3, value4, value5, value6, value7, value8, value9, value10, value11, value12, value13, value14, value15, value16, value17, value18 };
        fetch('/submit', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ data })
        })
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.error(error))
    };
  
render() {
    return e(
        'table',
        { class: "table1" },
        e('div', {class:"headtops"}, "1 MONTH"),

        e(
            'tr',
            null, e('div', null,
                e('input', { type: 'button', value: "Enter your name", class: "heads" }),
                e('input', { type: 'text',class:"inputTop", name: 'value1_1', value: this.state.value1[0], onChange: this.handleChange }),
                e('input', { type: 'text',class:"inputTop", name: 'value1_2', value: this.state.value1[1], onChange: this.handleChange }),
                e('input', { type: 'text',class:"inputTop", name: 'value1_3', value: this.state.value1[2], onChange: this.handleChange }),
                e('input', { type: 'text',class:"inputTop", name: 'value1_4', value: this.state.value1[3], onChange: this.handleChange }),
            )),

        e(
            'tr',

            null,
            e('input', { type: "button", value: "Google Search Console Access", class: "heads" }),
            e('input', { type: 'text', name: 'value2_1', value: this.state.value2[0], onChange: this.handleChange }),
            e('input', { type: 'text', name: 'value2_2', value: this.state.value2[1], onChange: this.handleChange }),
            e('input', { type: 'text', name: 'value2_3', value: this.state.value2[2], onChange: this.handleChange }),
            e('input', { type: 'text', name: 'value2_4', value: this.state.value2[3], onChange: this.handleChange }),

        ),
        e(
            'tr',

            null,
            e('input', { type: "button", value: "Google Analytics Access", class: "heads" }),
            e('input', { type: 'text', name: 'value3_1', value: this.state.value3[0], onChange: this.handleChange }),
            e('input', { type: 'text', name: 'value3_2', value: this.state.value3[1], onChange: this.handleChange }),
            e('input', { type: 'text', name: 'value3_3', value: this.state.value3[2], onChange: this.handleChange }),
            e('input', { type: 'text', name: 'value3_4', value: this.state.value3[3], onChange: this.handleChange }),

        ),
        e(
            'tr',
            null,

            e('input', { type: "button", value: "Website Access", class: "heads" }),
            e('input', { type: 'text', name: 'value4_1', value: this.state.value4[0], onChange: this.handleChange }),
            e('input', { type: 'text', name: 'value4_2', value: this.state.value4[1], onChange: this.handleChange }),
            e('input', { type: 'text', name: 'value4_3', value: this.state.value4[2], onChange: this.handleChange }),
            e('input', { type: 'text', name: 'value4_4', value: this.state.value4[3], onChange: this.handleChange }),

        ),
        e(
            'tr',
            null,

            e('input', { type: "button", value: "Technical Audit", class: "heads" }),
            e('input', { type: 'text', name: 'value5_1', value: this.state.value5[0], onChange: this.handleChange }),
            e('input', { type: 'text', name: 'value5_2', value: this.state.value5[1], onChange: this.handleChange }),
            e('input', { type: 'text', name: 'value5_3', value: this.state.value5[2], onChange: this.handleChange }),
            e('input', { type: 'text', name: 'value5_4', value: this.state.value5[3], onChange: this.handleChange }),

        ),
        e(
            'tr',
            null,

            e('input', { type: "button", value: "Anchor Text and Semantic Analysis", class: "heads" }),
            e('input', { type: 'text', name: 'value6_1', value: this.state.value6[0], onChange: this.handleChange }),
            e('input', { type: 'text', name: 'value6_2', value: this.state.value6[1], onChange: this.handleChange }),
            e('input', { type: 'text', name: 'value6_3', value: this.state.value6[2], onChange: this.handleChange }),
            e('input', { type: 'text', name: 'value6_4', value: this.state.value6[3], onChange: this.handleChange }),

        ),
        e(
            'tr',
            null,

            e('input', { type: "button", value: "Competitor Analysis", class: "heads" }),
            e('input', { type: 'text', name: 'value7_1', value: this.state.value7[0], onChange: this.handleChange }),
            e('input', { type: 'text', name: 'value7_2', value: this.state.value7[1], onChange: this.handleChange }),
            e('input', { type: 'text', name: 'value7_3', value: this.state.value7[2], onChange: this.handleChange }),
            e('input', { type: 'text', name: 'value7_4', value: this.state.value7[3], onChange: this.handleChange }),

        ),
        e(
            'tr',
            null,

            e('input', { type: "button", value: "Anchor Text/URL Mapping", class: "heads" }),
            e('input', { type: 'text', name: 'value8_1', value: this.state.value8[0], onChange: this.handleChange }),
            e('input', { type: 'text', name: 'value8_2', value: this.state.value8[1], onChange: this.handleChange }),
            e('input', { type: 'text', name: 'value8_3', value: this.state.value8[2], onChange: this.handleChange }),
            e('input', { type: 'text', name: 'value8_4', value: this.state.value8[3], onChange: this.handleChange }),

        ),
        e(
            'tr',
            null,

            e('input', { type: "button", value: "Google Data Studio Report + Local Reporting Suite", class: "heads" }),
            e('input', { type: 'text', name: 'value9_1', value: this.state.value9[0], onChange: this.handleChange }),
            e('input', { type: 'text', name: 'value9_2', value: this.state.value9[1], onChange: this.handleChange }),
            e('input', { type: 'text', name: 'value9_3', value: this.state.value9[2], onChange: this.handleChange }),
            e('input', { type: 'text', name: 'value9_4', value: this.state.value9[3], onChange: this.handleChange }),

        ),
        e(
            'tr',
            null,

            e('input', { type: "button", value: "Site Level Optimization", class: "heads" }),
            e('input', { type: 'text', name: 'value10_1', value: this.state.value10[0], onChange: this.handleChange }),
            e('input', { type: 'text', name: 'value10_2', value: this.state.value10[1], onChange: this.handleChange }),
            e('input', { type: 'text', name: 'value10_3', value: this.state.value10[2], onChange: this.handleChange }),
            e('input', { type: 'text', name: 'value10_4', value: this.state.value10[3], onChange: this.handleChange }),

        ),
        e(
            'tr',
            null,

            e('input', { type: "button", value: "On Page Optimization", class: "heads" }),
            e('input', { type: 'text', name: 'value11_1', value: this.state.value11[0], onChange: this.handleChange }),
            e('input', { type: 'text', name: 'value11_2', value: this.state.value11[1], onChange: this.handleChange }),
            e('input', { type: 'text', name: 'value11_3', value: this.state.value11[2], onChange: this.handleChange }),
            e('input', { type: 'text', name: 'value11_4', value: this.state.value11[3], onChange: this.handleChange }),

        ),
        e(
            'tr',
            null,

            e('input', { type: "button", value: "Content Publishing", class: "heads" }),
            e('input', { type: 'text', name: 'value12_1', value: this.state.value12[0], onChange: this.handleChange }),
            e('input', { type: 'text', name: 'value12_2', value: this.state.value12[1], onChange: this.handleChange }),
            e('input', { type: 'text', name: 'value12_3', value: this.state.value12[2], onChange: this.handleChange }),
            e('input', { type: 'text', name: 'value12_4', value: this.state.value12[3], onChange: this.handleChange }),

        ),
        e(
            'tr',
            null,

            e('input', { type: "button", value: "Premium Press Release", class: "heads" }),
            e('input', { type: 'text', name: 'value13_1', value: this.state.value13[0], onChange: this.handleChange }),
            e('input', { type: 'text', name: 'value13_2', value: this.state.value13[1], onChange: this.handleChange }),
            e('input', { type: 'text', name: 'value13_3', value: this.state.value13[2], onChange: this.handleChange }),
            e('input', { type: 'text', name: 'value13_4', value: this.state.value13[3], onChange: this.handleChange }),

        ),
        e(
            'tr',
            null,

            e('input', { type: "button", value: "Authority Niche Placements", class: "heads" }),
            e('input', { type: 'text', name: 'value14_1', value: this.state.value14[0], onChange: this.handleChange }),
            e('input', { type: 'text', name: 'value14_2', value: this.state.value14[1], onChange: this.handleChange }),
            e('input', { type: 'text', name: 'value14_3', value: this.state.value14[2], onChange: this.handleChange }),
            e('input', { type: 'text', name: 'value14_4', value: this.state.value14[3], onChange: this.handleChange }),

        ),
        e(
            'tr',
            null,

            e('input', { type: "button", value: "Review Managment", class: "heads" }),
            e('input', { type: 'text', name: 'value15_1', value: this.state.value15[0], onChange: this.handleChange }),
            e('input', { type: 'text', name: 'value15_2', value: this.state.value15[1], onChange: this.handleChange }),
            e('input', { type: 'text', name: 'value15_3', value: this.state.value15[2], onChange: this.handleChange }),
            e('input', { type: 'text', name: 'value15_4', value: this.state.value15[3], onChange: this.handleChange }),

        ),
        e(
            'tr',
            null,

            e('input', { type: "button", value: "Index Links", class: "heads" }),
            e('input', { type: 'text', name: 'value16_1', value: this.state.value16[0], onChange: this.handleChange }),
            e('input', { type: 'text', name: 'value16_2', value: this.state.value16[1], onChange: this.handleChange }),
            e('input', { type: 'text', name: 'value16_3', value: this.state.value16[2], onChange: this.handleChange }),
            e('input', { type: 'text', name: 'value16_4', value: this.state.value16[3], onChange: this.handleChange }),

        ),
        e(
            'tr',
            null,

            e('input', { type: "button", value: "Video Recap", class: "heads" }),
            e('input', { type: 'text', name: 'value17_1', value: this.state.value17[0], onChange: this.handleChange }),
            e('input', { type: 'text', name: 'value17_2', value: this.state.value17[1], onChange: this.handleChange }),
            e('input', { type: 'text', name: 'value17_3', value: this.state.value17[2], onChange: this.handleChange }),
            e('input', { type: 'text', name: 'value17_4', value: this.state.value17[3], onChange: this.handleChange }),

        ),
        e(
            'tr',
            null,

            e('input', { type: "button", value: "Google SEarch Console Access", class: "heads" }),
            e('input', { type: 'text', name: 'value18_1', value: this.state.value18[0], onChange: this.handleChange }),
            e('input', { type: 'text', name: 'value18_2', value: this.state.value18[1], onChange: this.handleChange }),
            e('input', { type: 'text', name: 'value18_3', value: this.state.value18[2], onChange: this.handleChange }),
            e('input', { type: 'text', name: 'value18_4', value: this.state.value18[3], onChange: this.handleChange }),

        ),
    )

}
}
const domContainer = document.querySelector('#root');
const root = ReactDOM.createRoot(domContainer);
root.render(e(formhandle));