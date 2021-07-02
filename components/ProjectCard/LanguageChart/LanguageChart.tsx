import { Bar } from "react-chartjs-2";

type LCProps = {
    languages: string[],
    percentages: number[],
}

export const LanguageChart = ({ languages, percentages }: LCProps) => {
    const data = {
        labels: languages,
        datasets: [
            {
                label: 'Percent written in',
                data: percentages,
                backgroundColor: [
                    'black',
                ],
            }
        ]
    }

    const options = {
        indexAxis: 'x',
        elements: {
            bar: {
                borderWidth: 2,
            },
        },
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Languages Used',
            },
        },
    }
    return (<Bar type="bar" data={data} options={options} />);
}
