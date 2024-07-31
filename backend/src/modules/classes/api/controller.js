import CustomController from "../../../libraries/customs/controller.js";
import validateFields from "../../../libraries/utils/validatefiels.js";
import Service from "../logic/service.js";

export default class Controller extends CustomController {
  constructor() {
    super(new Service);
    this.requieredfield = ["title", "level", "language", "teacher", "program"]
  }
  get    = async (req, res) => {
    const {teacherId, date, isTemplate} = req.query
    const filter = {}

    if (teacherId) filter.teacher = teacherId
    if (date) {
      const initialDate = new Date(`${date}T00:00:00-03:00`)
      const finalDate = new Date(`${date}T23:59:59-03:00`)

      const startDateUTC = new Date(initialDate.getTime() + initialDate.getTimezoneOffset() * 60000);
      const endDateUTC = new Date(finalDate.getTime() + finalDate.getTimezoneOffset() * 60000);

      filter.daytime = {
        $gte: startDateUTC,
        $lte: endDateUTC
      }
    }
    isTemplate ? filter.isTemplate = isTemplate : filter.isTemplate = false
    
    const elements = await this.service.get(filter)
    res.sendSuccessOrNotFound(elements)
  }

  create = async (req, res, next) => {
    try {
      const newElement = validateFields(req.body, this.requieredfield);
      const { description, duration_hours, daytime, isTemplate} = req.body
      const element = await this.service.create({...newElement, description, duration_hours, daytime, isTemplate});
      res.sendSuccess(element)
    } catch (error) {
      next(error)
    }
  }
}