import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Switch,
   Alert,
} from "react-native";
import { Calendar } from "react-native-calendars";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomHeader from "../compoent/CustomHeader";
import imageIndex from "../assets/imageIndex";

const CalendarScreen = () => {
  const [selectedDate, setSelectedDate] = useState<string>(""); // for calendar highlight
  const [startDate, setStartDate] = useState<string>(""); // for input box
  const [endDate, setEndDate] = useState<string>("");

  const [startTime, setStartTime] = useState<string>("");
  const [endTime, setEndTime] = useState<string>("");

  const [datePicker, setDatePicker] = useState<"start" | "end" | null>(null);
  const [timePicker, setTimePicker] = useState<"start" | "end" | null>(null);

  const [reminder, setReminder] = useState(false);

  // 📌 Calendar date select
  const handleCalendarSelect = (day: any) => {
    setSelectedDate(day.dateString);
  };

  // 📌 Date confirm
  const handleDateConfirm = (date: Date) => {
    const formatted = date.toISOString().split("T")[0]; // YYYY-MM-DD
    if (datePicker === "start") {
      setStartDate(formatted);
    } else if (datePicker === "end") {
      setEndDate(formatted);
    }
    setDatePicker(null);
  };

  // 📌 Time confirm
  const handleTimeConfirm = (date: Date) => {
    const time = date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    if (timePicker === "start") {
      setStartTime(time);
    } else if (timePicker === "end") {
      setEndTime(time);
    }
    setTimePicker(null);
  };

  // 📌 Confirm button
  const handleConfirm = () => {
    Alert.alert(
      "Schedule Saved ✅",
      `Start Date: ${startDate || "-"}\nEnd Date: ${endDate || "-"}\nStart Time: ${
        startTime || "-"
      }\nEnd Time: ${endTime || "-"}\nReminder: ${reminder ? "ON" : "OFF"}`
    );
  };
  const navigation  = useNavigation()

  return (
    <SafeAreaView style={styles.container}>
              <CustomHeader imageSource={imageIndex.backImg} label={"Calendar"}/>

      {/* Calendar */}
      <Calendar
        onDayPress={handleCalendarSelect}
        markedDates={{
          [selectedDate]: { selected: true, selectedColor: "#00bcd4" },
        }}
        theme={{
          todayTextColor: "#00bcd4",
          arrowColor: "#00bcd4",
        }}
      />

      {/* Bottom Card */}
      <View style={styles.bottomCard}>
        <Text style={styles.sectionTitle}>Add Schedule</Text>

        {/* Start & End Date */}
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.inputBox}
            onPress={() => setDatePicker("start")}
          >
            <Text>{startDate || "Select Start Date"}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.inputBox}
            onPress={() => setDatePicker("end")}
          >
            <Text>{endDate || "Select End Date"}</Text>
          </TouchableOpacity>
        </View>

        {/* Start & End Time */}
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.inputBox}
            onPress={() => setTimePicker("start")}
          >
            <Text>{startTime || "Select Start Time"}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.inputBox}
            onPress={() => setTimePicker("end")}
          >
            <Text>{endTime || "Select End Time"}</Text>
          </TouchableOpacity>
        </View>

        {/* Reminder Switch */}
        <View style={styles.reminderRow}>
          <Text style={{ fontSize: 16 }}>Reminds me</Text>
          <Switch value={reminder} onValueChange={setReminder} />
        </View>

        {/* Confirm Button */}
        <TouchableOpacity style={styles.confirmBtn} 
        
        // onPress={handleConfirm}
                onPress={()=>{
              navigation.goBack();

                }}


        >
          <Text style={styles.confirmText}>Confirm</Text>
        </TouchableOpacity>
      </View>

      {/* Date Picker */}
      <DateTimePickerModal
        isVisible={!!datePicker}
        mode="date"
        onConfirm={handleDateConfirm}
        onCancel={() => setDatePicker(null)}
      />

      {/* Time Picker */}
      <DateTimePickerModal
        isVisible={!!timePicker}
        mode="time"
        onConfirm={handleTimeConfirm}
        onCancel={() => setTimePicker(null)}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  bottomCard: {
    backgroundColor: "#fff",
  padding: 16,
  borderTopLeftRadius: 20,
  borderTopRightRadius: 20,
  elevation: 5, // Android shadow
  shadowColor: "#000", // iOS shadow
  shadowOffset: { width: 0, height: -3 },
  shadowOpacity: 0.1,
  shadowRadius: 4,
  position: "absolute",
  bottom: 0,
  left: 0,
  right: 0,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 12,
    textAlign: "center",
  },
  row: { flexDirection: "row", justifyContent: "space-between", marginBottom: 12 },
  inputBox: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 12,
    marginHorizontal: 5,
    borderRadius: 10,
    backgroundColor: "#f9f9f9",
  },
  reminderRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 12,
  },
  confirmBtn: {
    backgroundColor: "#00bcd4",
    padding: 14,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 10,
  },
  confirmText: { color: "#fff", fontSize: 16, fontWeight: "600" },
});

export default CalendarScreen;
