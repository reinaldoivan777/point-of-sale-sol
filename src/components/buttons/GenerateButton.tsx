import BigNumber from 'bignumber.js';
import React, { FC } from 'react';
import { usePayment } from '../../hooks/usePayment';
import * as css from './GenerateButton.module.pcss';

export const GenerateButton: FC = () => {
    const { amountRupiah, setAmount, generate, convertRupiahToSol } = usePayment();

    return (
        <button
            className={css.root}
            type="button"
            onClick={async () => {
                const response: any = await convertRupiahToSol();
                if (response?.status === 'success') {
                    setAmount(new BigNumber(response?.data?.convert_cripto?.toFixed(9)));
                }
                await generate();
            }}
            disabled={!amountRupiah || amountRupiah.isLessThanOrEqualTo(0)}
        >
            Convert to SOL and generate QR
        </button>
    );
};
