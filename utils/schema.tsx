import { pgTable, serial, varchar, text, integer, timestamp } from "drizzle-orm/pg-core";

export const AiOutput = pgTable('aiOutput',{
    id: serial('id').primaryKey(),
    formData: varchar('formdata').notNull(),
    aiResponse: text('aiResponse'),
    templateSlug: varchar('templateSlug').notNull(),
    createdBy: varchar('createdBy').notNull(),
    createdAt: varchar('createdAt'),
    credits: integer('credits').default(20000),
    plan: varchar('plan', { length: 255 }),
    lastPaymentDate: timestamp('last_payment_date'),
    paymentStatus: varchar('payment_status', { length: 50 }),
});

export const PaymentHistory = pgTable('payment_history', {
    id: serial('id').primaryKey(),
    userId: varchar('user_id').notNull(),
    transactionId: varchar('transaction_id').notNull(),
    amount: varchar('amount').notNull(),
    planName: varchar('plan_name').notNull(),
    creditsAdded: integer('credits_added').notNull(),
    createdAt: timestamp('created_at').defaultNow(),
});