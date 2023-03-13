type Double = number;

export class Loan {
  id: string;
  type: string;
  createdAt: Date;
  updatedAt: Date;
  paidAt: Date;
  installments: Installment[];
  totalAmount: Double;

  constructor(
    id: string,
    type: string,
    createdAt: Date,
    updatedAt: Date,
    paidAt: Date,
    installments: Installment[],
    totalAmount: Double,
  ) {
    this.id = id;
    this.type = type;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.paidAt = paidAt;
    this.installments = installments;
    this.totalAmount = totalAmount;
  }

  createInstallmentPlan = (
    totalAmount: number,
    quantityInstallments: number,
    tax: number,
  ) => {
    const amount = (totalAmount / quantityInstallments) * tax;

    for (let i = 0; i < quantityInstallments; i++) {
      let installment = new Installment(
        122 + i,
        i + 1,
        amount,
        new Date(2022, 4, 15),
        new Date(),
        new Date(),
      );
      this.installments.push(installment);
    }
  };
}

export class Installment {
  id: number;
  number: number;
  amountToCharge: Double;
  dueDate: Date;
  createdAt: Date;
  updatedAt: Date;
  status: string;
  paidAt: Date | null;

  constructor(
    id: number,
    number: number,
    amountToCharge: Double,
    dueDate: Date,
    createdAt: Date,
    updatedAt: Date,
  ) {
    this.id = id;
    this.number = number;
    this.amountToCharge = amountToCharge;
    this.dueDate = dueDate;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.paidAt = null;
    this.status = 'open';
  }

  public payInstallment(): void {
    let status = this.status;

    if (status !== 'paid') {
      this.status = 'paid';
      this.paidAt = new Date();
    } else {
      throw new Error('Parcela já está paga!');
    }
  }
}
