const App = () => {
    // Calculation logic for mortgage calculator
    const calculateMortgagePayments = (
        initialAmount,
        years,
        rate
    ) => {
        const monthlyRatePctAge = rate / 1200;
        const monthlyPayment =
            monthlyRatePctAge === 0 ?
            initialAmount / years / 12 :
            (initialAmount * monthlyRatePctAge) /
            (1 - Math.pow(1 / (1 + monthlyRatePctAge), years * 12));

        return {
            monthlyPayment
        };
    }
    // used react hooks instead of regular class implementation to manage state
    const [initialAmount, setInitialAmount] = React.useState('200000');
    const [rate, setRate] = React.useState('5');
    const [years, setYears] = React.useState('25');
    const {
        monthlyPayment
    } = calculateMortgagePayments(
        +initialAmount,
        +years,
        rate
    );
    // return the content to be rendered for the App
    return (
        <div>
        <nav className="navbar navbar-default container">
            <div className="navbar-header">
                <div className="navbar-brand">
                    <img src="https://itools-ioutils.fcac-acfc.gc.ca/MC-CH/images/MC-CH.svg" class="img-fluid brandlogo" />
                    Mortgage Calculator</div>
            </div>
        </nav>
        <div className="container-fluid container">
            <div class="col-md-12 col-sm-12">
                <p>This calculator determines your mortgage payment and provides you with a mortgage payment schedule. The
                    calculator also shows how much money and how many years you can save by making prepayments.</p>
                <p>
                    To help determine whether or not you qualify for a home mortgage based on income and expenses, visit
                    the&nbsp;
                    <a href="https://itools-ioutils.fcac-acfc.gc.ca/MQ-HQ/MQ-EAPH-eng.aspx">Mortgage Qualifier Tool</a>.
                </p>
                <p><strong>Note:</strong> As of July 9, 2012, the maximum amortization period for mortgages with less than a
                    20
                    percent down payment is <strong>25 years</strong>.</p>
            </div>
            <div className="row">
                <div className="col-sm-6">
                    <section class="panel panel-primary mrgn-tp-lg">
                        <header class="panel-heading">
                            <h3 class="panel-title">
                                Payment Plan</h3>
                        </header>
                        <div class="panel-body">
                            <div>
                                <div class="tooltips"><label>Mortgage Amount($):</label><span class="tooltiptext">The amount
                                        you expect to
                                        borrow from your financial institution. It is calculated as the purchase price of
                                        your home, minus
                                        the down payment plus any applicable mortgage loan insurance premium you have to
                                        pay.</span></div>
                                <input type="number" maxLength={10} value={initialAmount} onChange={e=>
                                setInitialAmount(e.target.value)}/>
                            </div>
                            <div>
                                <label>Interest Rate:</label>
                                <input type="number" step={0.1} value={rate} onChange={e=> setRate(e.target.value)}
                                />
                            </div>
                            <div>
                                <label>Amortization Period:</label>
                                <input type="number" maxLength={2} value={years} onChange={e=> setYears(e.target.value)}
                                />
                            </div>
                            <div>
                                <label>Payment Frequency:</label>
                                <input type="number" maxLength={2} value={years} onChange={e=> setYears(e.target.value)}
                                />
                            </div>
                        </div>
                    </section>
                </div>
                {/* this section contains dummy values only and can similarly be used for calculation in the formula */}
                <div className="col-sm-6">
                    <section class="panel panel-primary mrgn-tp-lg">
                        <header class="panel-heading">
                            <h3 class="panel-title">
                                Prepayment Plan</h3>
                        </header>
                        <div class="panel-body">
                            <div>
                                <div class="tooltips"><label>Prepayment Amount($):</label><span class="tooltiptext">Amount
                                        that you will prepay on your mortgage. This amount will be applied to the mortgage
                                        principal balance, at a frequency of prepayments that you determine.</span></div>
                                <input type="number" maxLength={10} value={initialAmount} onChange={e=>
                                setInitialAmount(e.target.value)}/>
                            </div>
                            <div>
                                <label>Prepayment Frequency:</label>
                                <input type="number" step={0.1} value={rate} onChange={e=> setRate(e.target.value)}
                                />
                            </div>
                            <div>
                                <label>Start With Payment:</label>
                                <input type="number" maxLength={2} value={years} onChange={e=> setYears(e.target.value)}
                                />
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            <div className="col-sm-12">
                <h2>
                    Monthly Mortgage Payment is
                    <span className="money">
                        {(+monthlyPayment).toFixed(2)}
                    </span>
                </h2>
            </div>
        </div>
    </div>
    );
}

ReactDOM.render( < App/ > , document.getElementById('mortgageApp'));