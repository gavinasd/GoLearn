var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var User = (function () {
    function User() {
    }
    return User;
}());
export { User };
var Question = (function () {
    function Question(id, creator, questionType) {
        this._id = id;
        this.creator = creator;
        this.questionType = questionType;
    }
    return Question;
}());
export { Question };
Question.TPO_READING_TYPE = 'tpo_reading';
var TPOReadingQuestion = (function (_super) {
    __extends(TPOReadingQuestion, _super);
    function TPOReadingQuestion(obj, content) {
        var _this = _super.call(this, obj && obj.id, obj && obj.creator, obj && obj.questionType) || this;
        _this.options = [];
        _this.passage = obj && obj.passage;
        _this.question = obj && obj.question;
        _this.options = obj && obj.options;
        _this.answer = obj && obj.answer;
        _this.content = content || '';
        return _this;
    }
    return TPOReadingQuestion;
}(Question));
export { TPOReadingQuestion };
var ResponseToQuestion = (function () {
    function ResponseToQuestion(obj) {
        this.creator = obj && obj.creator;
        this.class = obj && obj.class;
        this.assignment = obj && obj.assignment;
        this.question = obj && obj.question;
        this.content = obj && obj.content;
    }
    return ResponseToQuestion;
}());
export { ResponseToQuestion };
var AssignmentInfo = (function () {
    function AssignmentInfo(obj) {
        this.assignmentId = obj && obj.assignmentId;
        this.assignmentName = obj && obj.assignmentName;
        this.gradeInfoList = obj && obj.gradeInfoList;
    }
    return AssignmentInfo;
}());
export { AssignmentInfo };
var GradeInfo = (function () {
    function GradeInfo(obj) {
        this.studentId = obj && obj.studentId;
        this.studentName = obj && obj.studentName;
        this.score = obj && obj.score;
        this.totalScore = obj && obj.totalScore;
        this.undoneNum = obj && obj.undoneNum;
    }
    return GradeInfo;
}());
export { GradeInfo };
var ClassInfo = (function () {
    function ClassInfo(classId, className) {
        this.classId = classId;
        this.className = className;
    }
    return ClassInfo;
}());
export { ClassInfo };
//# sourceMappingURL=D:/web_projects/Cloud_Class/trunk/src/src/app/models/models.js.map