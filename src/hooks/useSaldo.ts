import axios from 'axios';
import { useEffect, useState } from 'react';



export const useSaldo = async () => {
    const [saldo, setSaldo] = useState({ contaCorrente: {
        valor: 0,
    }, contaPoupanca: {
        valor: 0,
    } });

    useEffect(() => {
        const fetchSaldo = async () => {
            const saldoResult = await getSaldo();
            setSaldo(saldoResult);
            console.log(saldoResult);
        };

        fetchSaldo();
    }, []);

    return saldo;
};
const getSaldo = async () => {
    try {
        const response = await axios.get(
            `http://localhost:3000/api/saldo`
        )
        return { contaCorrente: response.data[0], contaPoupanca: response.data[1] }
    } catch (error) {

        return { contaCorrente: {}, contaPoupanca: {} }
    }
}