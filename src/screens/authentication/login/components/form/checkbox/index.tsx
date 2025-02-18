import { Text } from "@/components/text";
import { Box } from "@/components/box";
import Feather from "@expo/vector-icons/Feather";
import { Button } from "@/components/button";

interface CheckboxProps {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

export const Checkbox = ({ label, checked, onChange }: CheckboxProps) => {
  return (
    <Button label={label} onPress={() => onChange(!checked)} variant="link">
      <Box
        flexDirection="row"
        alignItems="center"
        accessibilityRole="checkbox"
        accessible
        gap="s"
      >
        <Box
          width={20}
          height={20}
          borderRadius="s"
          borderWidth={1}
          borderColor={checked ? "accent" : "darkGray"}
          backgroundColor={checked ? "accent" : "transparent"}
          alignItems="center"
          justifyContent="center"
        >
          <Feather
            name="check"
            size={14}
            color={checked ? "white" : "transparent"}
          />
        </Box>
        <Text variant="label">{label}</Text>
      </Box>
    </Button>
  );
};
