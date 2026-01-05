import { View, Text, StyleSheet, Pressable } from "react-native";
import { Fonts } from "@/constants/theme";

export default function Chat() {
  return (
    <View style={styles.container}>
      <View style={styles.backgroundTop} />
      <View style={styles.backgroundGlow} />
      <View style={styles.ring} />
      <View style={styles.hero}>
        <View style={styles.pill}>
          <View style={styles.pillDot} />
          <Text style={styles.pillText}>New: AI nutrition co-pilot</Text>
        </View>
        <Text style={styles.title}>Welcome to MyFitnessChat</Text>
        <Text style={styles.subtitle}>
          Your smart food tracker. Log meals by voice, photo, or text and get instant macro
          breakdowns with coaching that keeps you consistent.
        </Text>
        <View style={styles.statsRow}>
          <View style={styles.stat}>
            <Text style={styles.statValue}>4 sec</Text>
            <Text style={styles.statLabel}>Avg. log time</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.stat}>
            <Text style={styles.statValue}>+26%</Text>
            <Text style={styles.statLabel}>Better adherence</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.stat}>
            <Text style={styles.statValue}>24/7</Text>
            <Text style={styles.statLabel}>Coach support</Text>
          </View>
        </View>
        <View style={styles.actions}>
          <Pressable style={[styles.button, styles.primary]}>
            <Text style={styles.primaryText}>Create account</Text>
          </Pressable>
          <Pressable style={[styles.button, styles.ghost]}>
            <Text style={styles.ghostText}>Sign in</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#05070b",
    padding: 24,
    justifyContent: "center",
  },
  backgroundTop: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: "45%",
    backgroundColor: "#0f172a",
  },
  backgroundGlow: {
    position: "absolute",
    width: 380,
    height: 380,
    borderRadius: 190,
    backgroundColor: "#22d3ee",
    opacity: 0.18,
    top: -120,
    right: -120,
  },
  ring: {
    position: "absolute",
    width: 260,
    height: 260,
    borderRadius: 130,
    borderWidth: 1,
    borderColor: "rgba(148, 163, 184, 0.15)",
    bottom: -80,
    left: -60,
  },
  hero: {
    paddingHorizontal: 4,
  },
  pill: {
    alignSelf: "flex-start",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(45, 212, 191, 0.12)",
    borderRadius: 999,
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: "rgba(45, 212, 191, 0.35)",
    marginBottom: 16,
  },
  pillDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: "#2dd4bf",
    marginRight: 8,
  },
  pillText: {
    color: "#a7f3d0",
    fontSize: 12,
    fontWeight: "600",
    letterSpacing: 0.6,
    textTransform: "uppercase",
  },
  title: {
    fontSize: 34,
    fontWeight: "700",
    color: "#f8fafc",
    marginBottom: 14,
    fontFamily: Fonts.serif,
  },
  subtitle: {
    fontSize: 16,
    color: "#cbd5e1",
    lineHeight: 22,
    marginBottom: 24,
  },
  statsRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 24,
    gap: 12,
  },
  stat: {
    flex: 1,
  },
  statValue: {
    color: "#f8fafc",
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 4,
  },
  statLabel: {
    color: "#94a3b8",
    fontSize: 12,
  },
  statDivider: {
    width: 1,
    height: 32,
    backgroundColor: "rgba(148, 163, 184, 0.2)",
  },
  actions: {
    width: "100%",
    gap: 12,
  },
  button: {
    paddingVertical: 14,
    borderRadius: 14,
    alignItems: "center",
  },
  primary: {
    backgroundColor: "#2dd4bf",
  },
  primaryText: {
    color: "#052e2b",
    fontSize: 16,
    fontWeight: "600",
  },
  ghost: {
    backgroundColor: "rgba(15, 23, 42, 0.35)",
    borderWidth: 1,
    borderColor: "rgba(148, 163, 184, 0.3)",
  },
  ghostText: {
    color: "#e2e8f0",
    fontSize: 15,
    fontWeight: "500",
  },
});
