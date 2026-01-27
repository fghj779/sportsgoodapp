import { z } from 'zod';

/**
 * AI 응답 스키마
 */
export const AIResponseSchema = z.object({
  teamId: z.enum([
    'doosan',
    'lg',
    'kia',
    'hanwha',
    'samsung',
    'kiwoom',
    'lotte',
    'ssg',
    'nc',
    'kt',
  ]),
  compatibility: z.number().min(75).max(99),
  reason: z.string().min(10).max(300),
});

export type AIResponse = z.infer<typeof AIResponseSchema>;

/**
 * 답변 스키마
 */
export const AnswerSchema = z.object({
  questionId: z.number().min(1).max(20),
  selected: z.enum(['A', 'B']),
});

export const AnswersSchema = z.array(AnswerSchema).min(20).max(20);

export type ValidatedAnswer = z.infer<typeof AnswerSchema>;
