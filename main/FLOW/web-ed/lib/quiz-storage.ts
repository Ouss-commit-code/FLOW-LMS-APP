// lib/quiz-storage.ts
export interface QuizAttempt {
  id: string;
  quizId: string;
  score: number;
  timestamp: string;
  status: "Completed" | "Failed";
  timeSpent: number;
}

const ATTEMPTS_STORAGE_KEY = "quiz-attempts";
const QUIZ_RESULTS_KEY = "quiz-results";

// Save a new quiz attempt
export const saveQuizAttempt = (attempt: QuizAttempt): void => {
  if (typeof window === 'undefined') return;
  
  try {
    const existingAttempts = loadQuizAttempts();
    const updatedAttempts = [...existingAttempts, attempt];
    localStorage.setItem(ATTEMPTS_STORAGE_KEY, JSON.stringify(updatedAttempts));
  } catch (error) {
    console.error("Error saving quiz attempt:", error);
  }
};

// Load all quiz attempts
export const loadQuizAttempts = (): QuizAttempt[] => {
  if (typeof window === 'undefined') return [];
  
  try {
    const stored = localStorage.getItem(ATTEMPTS_STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch (error) {
    console.error("Error loading quiz attempts:", error);
    return [];
  }
};

// Save quiz results temporarily (for the stats page to detect)
export const saveQuizResults = (quizId: string, score: number, timeSpent: number): void => {
  if (typeof window === 'undefined') return;
  
  try {
    const results = {
      quizId,
      score,
      timeSpent,
      timestamp: new Date().toISOString()
    };
    localStorage.setItem(QUIZ_RESULTS_KEY, JSON.stringify(results));
  } catch (error) {
    console.error("Error saving quiz results:", error);
  }
};

// Load quiz results
export const loadQuizResults = (): any => {
  if (typeof window === 'undefined') return null;
  
  try {
    const stored = localStorage.getItem(QUIZ_RESULTS_KEY);
    return stored ? JSON.parse(stored) : null;
  } catch (error) {
    console.error("Error loading quiz results:", error);
    return null;
  }
};

// Clear quiz results
export const clearQuizResults = (): void => {
  if (typeof window === 'undefined') return;
  localStorage.removeItem(QUIZ_RESULTS_KEY);
};

// Reset all stats
export const resetAllAttempts = (): void => {
  if (typeof window === 'undefined') return;
  localStorage.removeItem(ATTEMPTS_STORAGE_KEY);
  localStorage.removeItem(QUIZ_RESULTS_KEY);
};