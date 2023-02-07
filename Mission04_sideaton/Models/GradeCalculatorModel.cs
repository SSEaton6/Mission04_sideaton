using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Mission04_sideaton.Models
{
    public class GradeCalculatorModel
    {
        [Range(0, 100, ErrorMessage = "Assignment Grade must be between 0 and 100")]
        public float Assignments{ get; set; }

        [Range(0, 100, ErrorMessage = "Quiz Grade must be between 0 and 100")]
        public float Quizzes { get; set; }

        [Range(0, 100, ErrorMessage = "Group Projects Grade must be between 0 and 100")]
        public float GroupProjects { get; set; }

        [Range(0, 100, ErrorMessage = "Intex Grade must be between 0 and 100")]
        public float Intex { get; set; }

        [Range(0, 100, ErrorMessage = "Midterm Exam Grade must be between 0 and 100")]
        public float MidExam { get; set; }

        [Range(0, 100, ErrorMessage = "Final Exam Grade must be between 0 and 100")]
        public float FinalExam { get; set; }
    }
}
