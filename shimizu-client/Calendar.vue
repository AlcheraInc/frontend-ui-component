<template>
  <div class="background-calendar">
    <div class="header">
      <img @click="prevYear" src="@/assets/group 4018.svg" />
      <div class="text-year">{{ year }}</div>
      <img @click="nextYear" src="@/assets/group 4019.svg" class="icon-arrow-right--year" />
      <img @click="prevMonth" src="@/assets/group 4018.svg" />
      <div class="text-month">{{ monthNames[current.get('month')] }}</div>
      <img @click="nextMonth" src="@/assets/group 4019.svg" />
    </div>
    <div>
      <!-- daysOfWeek -->
      <div class="row-week">
        <div v-for="(week, index) in daysOfWeek" :key="index" class="week text-box">
          {{ week }}
        </div>
      </div>
      <div class="split-line"></div>
      <div v-for="(row, rowIndex) in dateProps" :key="rowIndex" class="row-date">
        <div v-for="(prop, colIndex) in row" :key="colIndex" @click="onClickDate(prop.date)" class="day text-box" @mouseover="onMouseOver(prop.date)">
          <div
            :class="{
              focus: isFocus(prop.date),
              start: isStart(prop.date),
              end: isEnd(prop.date),
              middle: isMiddle(prop.date),
            }"
          ></div>
          <div :class="{ today: isToday(prop.date), dot: !isFocus(prop.date), hide: prop.hide }"></div>
          <div
            :class="{
              hide: prop.hide || isFocus(prop.date),
              min: isMinDate(prop.date),
              max: isMaxDate(prop.date),
            }"
          >
            {{ prop.date.get('date') }}
          </div>
        </div>
      </div>
      <!-- calendar rows -->
    </div>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  name: 'Calendar',
  props: {
    /**
     * emit events
     * update dateRange
     */
  },
  data() {
    return {
      today: moment().startOf('day'),
      current: moment().startOf('day'),
      // history는 과거 1년까지 검색 가능
      minDate: moment().startOf('day').subtract(1, 'years'),
      maxDate: moment().startOf('day').add(1, 'days'),
      isSelection: false,
      dateRange: { startDate: null, endDate: null },
      daysOfWeek: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
      monthNames: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
    }
  },
  computed: {
    year() {
      return this.current.get('year')
    },
    dateProps() {
      let calendar = []
      let startDate = moment(this.current).startOf('month').startOf('week')
      let endDate = moment(this.current).endOf('month').endOf('week').add(1, 'days')
      let week = 0
      let daysOfWeek = []
      while (true) {
        daysOfWeek.push({ date: moment(startDate) })
        startDate.add(1, 'days')
        week++
        if (week === 7) {
          week = 0
          calendar.push(daysOfWeek)
          daysOfWeek = []
        }
        if (startDate.format('YYYY-MM-DD') === endDate.format('YYYY-MM-DD')) {
          break
        }
      }
      // check showing dates
      week = calendar[0]
      let hide = true
      for (let i = 0; i < week.length; i++) {
        if (week[i].date.get('date') === 1) {
          hide = false
        }
        week[i].hide = hide
      }
      week = calendar[calendar.length - 1]
      hide = false
      for (let i = 0; i < week.length; i++) {
        if (week[i].date.get('date') === 1) {
          hide = true
        }
        week[i].hide = hide
      }
      return calendar
    },
  },
  methods: {
    nextMonth(continueTask = false) {
      if (this.maxDate.format('YYYY-MM') !== this.current.format('YYYY-MM')) {
        this.current = moment(this.current.add(1, 'months'))
      }
    },
    prevMonth(continueTask = false) {
      if (this.minDate.format('YYYY-MM') !== this.current.format('YYYY-MM')) {
        this.current = moment(this.current.subtract(1, 'months'))
      }
    },
    nextYear() {
      for (let i = 0; i < 12; i++) {
        this.nextMonth(true)
      }
    },
    prevYear() {
      for (let i = 0; i < 12; i++) {
        this.prevMonth(true)
      }
    },
    onClickDate(date) {
      if (!this.isMinDate(date) && !this.isMaxDate(date)) {
        if (!this.dateRange.startDate) {
          this.dateRange.startDate = date
          this.dateRange.endDate = date
        } else {
          if (this.dateRange.startDate.isAfter(date)) {
            this.dateRange.endDate = this.dateRange.startDate
            this.dateRange.startDate = date
          }
          this.isSelection = true
          const range = [this.dateRange.startDate.format('YYYY-MM-DD'), this.dateRange.endDate.format('YYYY-MM-DD')]
          this.$emit('update', range)
        }
      }
    },
    onMouseOver(date) {
      if (this.dateRange.startDate && !this.isSelection && !this.isMinDate(date) && !this.isMaxDate(date)) {
        this.dateRange.endDate = date
      }
    },
    isFocus(date) {
      if (this.dateRange.startDate) {
        return this.isStart(date) || this.isEnd(date) || this.isMiddle(date)
      }
      return false
    },
    isToday(date) {
      return this.today.format('YYYY-MM-DD') === date.format('YYYY-MM-DD')
    },
    isMinDate(date) {
      return this.minDate.isSameOrAfter(date)
    },
    isMaxDate(date) {
      return this.maxDate.isSameOrBefore(date)
    },
    isStart(date) {
      if (this.dateRange.startDate) {
        if (this.dateRange.startDate.isAfter(this.dateRange.endDate)) {
          return this.dateRange.endDate && this.dateRange.endDate.format('YYYY-MM-DD') === date.format('YYYY-MM-DD')
        } else if (this.dateRange.startDate.isBefore(this.dateRange.endDate)) {
          return this.dateRange.startDate && this.dateRange.startDate.format('YYYY-MM-DD') === date.format('YYYY-MM-DD')
        } else if (this.dateRange.startDate.format('YYYY-MM-DD') === date.format('YYYY-MM-DD')) {
          return true
        }
      } else {
        return false
      }
    },
    isEnd(date) {
      if (this.dateRange.startDate) {
        if (this.dateRange.startDate.isBefore(this.dateRange.endDate)) {
          return this.dateRange.endDate && this.dateRange.endDate.format('YYYY-MM-DD') === date.format('YYYY-MM-DD')
        } else if (this.dateRange.startDate.isAfter(this.dateRange.endDate)) {
          return this.dateRange.startDate && this.dateRange.startDate.format('YYYY-MM-DD') === date.format('YYYY-MM-DD')
        } else if (this.dateRange.endDate.isSame(date)) {
          return true
        }
      } else {
        return false
      }
    },
    isMiddle(date) {
      if (this.dateRange.startDate) {
        if (this.dateRange.startDate.isBefore(this.dateRange.endDate)) {
          return date.isBetween(this.dateRange.startDate, this.dateRange.endDate)
        } else if (this.dateRange.startDate.isAfter(this.dateRange.endDate)) {
          return date.isBetween(this.dateRange.endDate, this.dateRange.startDate)
        }
      } else {
        return false
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.background-calendar {
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  align-items: center;
  box-shadow: 10px 10px 30px #00000029;
  border-radius: 20px;
  background-color: white;
  width: 500px;
  height: 471px;
}

.header {
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: bold;
  color: #43425d;
  margin-top: 40px;
  margin-bottom: 10px;

  .text-year,
  .text-month {
    margin: 0px 15px;
  }

  .icon-arrow-right--year {
    margin-right: 15px;
  }

  img {
    cursor: pointer;
  }
}

.text-box {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 50px;
}

.row-week {
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;

  .week {
    color: #43425d;
    font-size: 20px;
    font-weight: bold;

    &:first-child {
      color: #ff3b30;
    }

    &:last-child {
      color: #3b77ff;
    }
  }
}

.split-line {
  border: 1px solid #d3d5dd;
}

.row-date {
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;

  .day {
    position: relative;
    color: #43425d;
    font-size: 20px;
    font-weight: 600;
    cursor: pointer;

    &:first-child {
      color: #ff3b30;
    }

    &:last-child {
      color: #3b77ff;
    }

    .hide {
      color: white;
      z-index: 1;
    }

    .focus {
      position: absolute;
      width: 100%;
      height: 42px;
      background-color: #3a7bc6;

      &.start {
        border-radius: 22px 0px 0px 22px;
      }

      &.end {
        border-radius: 0px 22px 22px 0px;
      }

      &.start.end {
        border-radius: 22px;
      }
    }

    .min,
    .max {
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #eee;
      opacity: 0.5;
      text-decoration: line-through;
      width: 100%;
      height: 100%;
      position: absolute;

      &.hide {
        background-color: white;
      }
    }

    .today {
      position: absolute;
      background-color: white;
      width: 4px;
      height: 4px;
      margin-top: 30px;
      border-radius: 2px;

      &.dot {
        background-color: #3a7bc6;

        &.hide {
          background-color: white;
        }
      }
    }
  }
}
</style>
